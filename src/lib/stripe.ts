import Stripe from "stripe";

// Only initialize Stripe if the secret key exists
export const stripe = process.env.STRIPE_SECRET_KEY 
  ? new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2025-08-27.basil",
      typescript: true,
    })
  : null;

// Helper function to check if Stripe is available
export const isStripeEnabled = () => !!stripe;

// Safe wrapper for Stripe operations
export const withStripe = <T>(operation: (stripe: Stripe) => T): T | null => {
  if (!stripe) {
    console.warn("Stripe is not configured. Skipping operation.");
    return null;
  }
  return operation(stripe);
};