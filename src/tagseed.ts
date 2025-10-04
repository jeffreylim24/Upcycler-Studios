import { getPayload } from "payload";
import config from "@payload-config";
import { Product } from "./payload-types";

const tags = [
  { name: "Shirt" },
  { name: "Jeans" },
  { name: "Shorts" },
  { name: "Jackets" },
  { name: "Shoes" },
];

const seed = async () => {
  const payload = await getPayload({ config });

  // Fetch all products
  const products = await payload.find({
    collection: "products",
    limit: 100, // adjust as needed
  });

  for (const tag of tags) {
    await payload.create({
      collection: "tags",
      data: {
        name: tag.name,
        product: products.docs.map((p: Product) => p.id), // associate all products
      },
    });
  }
};

try {
  console.log("Running tag seed script...");
  await seed();
  console.log("Tag seed script finished successfully.");
  process.exit(0);
} catch (error) {
  console.error("Error running tag seed script:", error);
  process.exit(1);
}