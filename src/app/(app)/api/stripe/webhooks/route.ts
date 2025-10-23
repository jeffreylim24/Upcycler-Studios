import type { Stripe } from "stripe";
import { getPayload } from "payload";
import config from "@payload-config";
import { NextResponse } from "next/server";

import { stripe } from "@/lib/stripe";
import { ExpandedLineItem } from "@/modules/checkout/types";

export async function POST(req: Request) {
  let event: Stripe.Event;

  try {
    const body = await req.text();
    const sig = req.headers.get("stripe-signature");

    if (!sig) {
      throw new Error("No Stripe signature found");
    }

    if (!process.env.STRIPE_WEBHOOK_SECRET) {
      throw new Error("Webhook secret not configured");
    }

    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET,
    );

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    
    return NextResponse.json(
      { message: `Webhook Error: ${errorMessage}` }, 
      { status: 400 }
    );
  }

  const permittedEvents: string[] = [
    "checkout.session.completed",
    "account.updated",
  ];

  if (!permittedEvents.includes(event.type)) {
    return NextResponse.json(
      { message: "Event type not handled" }, 
      { status: 200 }
    );
  }

  try {
    let data;
    const payload = await getPayload({ config });

    switch (event.type) {
      case "checkout.session.completed": {
        data = event.data.object as Stripe.Checkout.Session;

        if (!data.metadata?.userId) {
          throw new Error("No user ID found in metadata");
        }

        const user = await payload.findByID({
          collection: "users",
          id: data.metadata.userId,
        });

        if (!user) {
          throw new Error("User not found");
        }

        const expandedSession = await stripe.checkout.sessions.retrieve(
          data.id,
          {
            expand: ["line_items.data.price.product"],
          },
          {
            stripeAccount: event.account,
          }
        );

        if (!expandedSession.line_items?.data || !expandedSession.line_items?.data.length) {
          throw new Error("No line items found");
        }

        const lineItems = expandedSession.line_items.data as ExpandedLineItem[];

        for (const item of lineItems) {
          const productId = item.price.product.metadata.id;

          // Atomically decrement stock only if stock > 0
          // This prevents TOCTOU race conditions in concurrent webhooks
          const result = await payload.db.collections.products?.findOneAndUpdate(
            {
              _id: productId,
              stock: { $gt: 0 }, // Only update if stock is greater than 0
            },
            {
              $inc: { stock: -1 }, // Atomically decrement stock by 1
            },
            {
              returnDocument: 'after', // Return the updated document
            }
          );

          // If no document was updated, product is either out of stock or doesn't exist
          if (!result) {
            // Fetch product to provide better error message
            const product = await payload.findByID({
              collection: "products",
              id: productId,
            });

            if (!product) {
              throw new Error(`Product not found: ${productId}`);
            }

            if (typeof product.stock !== 'number') {
              throw new Error(`Product missing stock field: ${product.name}`);
            }

            throw new Error(`Product out of stock: ${product.name}`);
          }

          // Only create order AFTER successful stock decrement
          // This ensures no orphaned orders if stock update fails
          await payload.create({
            collection: "orders",
            data: {
              stripeCheckoutSessionId: data.id,
              stripeAccountId: event.account,
              user: user.id,
              product: productId,
              name: item.price.product.name,
            },
          });
        }
        
        break;
      }
      case "account.updated": {
        data = event.data.object as Stripe.Account;

        await payload.update({
          collection: "tenants",
          where: {
            stripeAccountId: { equals: data.id },
          },
          data: { stripeDetailsSubmitted: data.details_submitted },
        })

        break;
      }
      default:
        throw new Error(`Unhandled event: ${event.type}`);
    }
  } catch (error) {
    console.log("❌ Webhook handler error:", error);
    return NextResponse.json(
      { message: "Webhook handler failed" },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { message: "Received" }, 
    { status: 200 }
  );
}

export async function GET() {
  return NextResponse.json({ 
    message: "Stripe webhook endpoint", 
    status: "active",
    timestamp: new Date().toISOString() 
  });
}