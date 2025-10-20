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

  console.log("🔄 Processing event:", event.type, "ID:", event.id);

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

          // Fetch current product to check stock
          const product = await payload.findByID({
            collection: "products",
            id: productId,
          });

          if (!product) {
            throw new Error(`Product not found: ${productId}`);
          }

          // Validate stock field exists
          if (typeof product.stock !== 'number') {
            throw new Error(`Product missing stock field: ${product.name}`);
          }

          // Check if product has sufficient stock
          if (product.stock <= 0) {
            throw new Error(`Product out of stock: ${product.name}`);
          }

          // Create the order
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

          // Calculate new stock value
          const newStock = product.stock - 1;

          // Update stock
          await payload.update({
            collection: "products",
            id: productId,
            data: {
              stock: newStock,
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