import type { Stripe } from "stripe";
import { getPayload } from "payload";
import config from "@payload-config";
import { NextResponse } from "next/server";

import { stripe } from "@/lib/stripe";
import { ExpandedLineItem } from "@/modules/checkout/types";

export async function POST(req: Request) {
  console.log("🔄 Webhook received - starting processing");
  
  let event: Stripe.Event;

  try {
    const body = await req.text();
    const sig = req.headers.get("stripe-signature");

    console.log("📝 Signature check:", !!sig);

    if (!sig) {
      console.log("❌ No Stripe signature found");
      throw new Error("No Stripe signature found");
    }

    if (!process.env.STRIPE_WEBHOOK_SECRET) {
      console.log("❌ No webhook secret configured");
      throw new Error("Webhook secret not configured");
    }

    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET,
    );
    
    console.log("✅ Webhook signature verified, event type:", event.type);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.log(`⚠️ Webhook signature verification failed:`, errorMessage);
    
    return NextResponse.json(
      { message: `Webhook Error: ${errorMessage}` }, 
      { status: 400 }
    );
  }

  console.log("🔄 Processing event:", event.type, "ID:", event.id);

  const permittedEvents: string[] = [
    "checkout.session.completed",
  ];

  if (!permittedEvents.includes(event.type)) {
    console.log("⚠️ Event type not permitted:", event.type);
    return NextResponse.json(
      { message: "Event type not handled" }, 
      { status: 200 }
    );
  }

  try {
    const payload = await getPayload({ config });
    console.log("✅ Payload instance created");

    switch (event.type) {
      case "checkout.session.completed": {
        const data = event.data.object as Stripe.Checkout.Session;
        console.log("🛒 Processing checkout session:", data.id);
        console.log("📋 Session metadata:", data.metadata);

        if (!data.metadata?.userId) {
          console.log("❌ No user ID found in metadata");
          throw new Error("No user ID found in metadata");
        }

        console.log("👤 Looking up user:", data.metadata.userId);
        const user = await payload.findByID({
          collection: "users",
          id: data.metadata.userId,
        });

        if (!user) {
          console.log("❌ User not found:", data.metadata.userId);
          throw new Error("User not found");
        }

        console.log("✅ User found:", user.id);

        console.log("🔍 Retrieving expanded session...");
        const expandedSession = await stripe.checkout.sessions.retrieve(
          data.id,
          {
            expand: ["line_items.data.price.product"],
          },
        );

        if (!expandedSession.line_items?.data || !expandedSession.line_items?.data.length) {
          console.log("❌ No line items found");
          throw new Error("No line items found");
        }

        const lineItems = expandedSession.line_items.data as ExpandedLineItem[];
        console.log("📦 Processing", lineItems.length, "line items");

        for (const item of lineItems) {
          console.log("🔨 Creating order for product:", item.price.product.metadata.id);
          
          const order = await payload.create({
            collection: "orders",
            data: {
              stripeCheckoutSessionId: data.id,
              user: user.id,
              product: item.price.product.metadata.id,
              name: item.price.product.name,
            },
          });
          
          console.log("✅ Order created:", order.id);
        }
        
        console.log(`🎉 All orders created successfully for session: ${data.id}`);
        break;
      }
      default:
        console.log("❌ Unhandled event type:", event.type);
        throw new Error(`Unhandled event: ${event.type}`);
    }
  } catch (error) {
    console.log("❌ Webhook handler error:", error);
    return NextResponse.json(
      { message: "Webhook handler failed" }, 
      { status: 500 }
    );
  }

  console.log("✅ Webhook processed successfully");
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