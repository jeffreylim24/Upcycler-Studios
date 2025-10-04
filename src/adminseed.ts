import { getPayload } from "payload";
import config from "@payload-config";

import { stripe } from "./lib/stripe";

const seed = async () => {
  const payload = await getPayload({config});

  const adminAccount = await stripe.accounts.create({});

  // Create admin tenant
  const adminTenant = await payload.create({
    collection: "tenants",
    data: {
      name: "admin",
      slug: "admin",
      stripeAccountId: adminAccount.id,
    },
  })

  // Create admin user with tenant attached
  await payload.create({
    collection: "users",
    data: {
      email: "admin@demo.com",
      password: "admin123",
      username: "admin",
      roles: ['super-admin'],
      tenants: [
        {
          tenant: adminTenant.id,
        }
      ],
    },
  });
}

try {
  console.log("Running admin seed script...");
  await seed();
  console.log("Seed script finished successfully.");
  process.exit(0);
} catch (error) {
  console.error("Error running seed script:", error);
  process.exit(1);
}