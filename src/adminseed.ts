import { getPayload } from "payload";
import config from "@payload-config"

const seed = async () => {
  const payload = await getPayload({config});

  // Create admin user
  await payload.create({
    collection: "users",
    data: {
      email: "admin@demo.com",
      password: "admin123",
      username: "admin",
      roles: ['super-admin'],
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