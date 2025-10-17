import { getPayload } from "payload";
import config from "@payload-config"

const categories = [
  {
    name: "All",
    slug: "all",
  },
  {
    name: "Tops",
    color: "#FFB5D8",
    slug: "tops",
    subcategories: [
      { name: "T-Shirts", slug: "t-shirts" },
      { name: "Shirts", slug: "shirts" },
      { name: "Polo Tees", slug: "polo-tees" },
      { name: "Zip-Up Jackets", slug: "zip-up-jackets" },
      { name: "Quarter Zips", slug: "quarter-zips" },
      { name: "Sweaters", slug: "sweaters" },
    ],
  },
  {
    name: "Bottoms",
    color: "#7EC8E3",
    slug: "bottoms",
    subcategories: [
      { name: "Jeans (Tapered)", slug: "jeans-tapered" },
      { name: "Jeans (Baggy)", slug: "jeans-baggy" },
      { name: "Cargos", slug: "cargos" },
      { name: "Others", slug: "others" },
    ],
  },
  {
    name: "Upcycled",
    color: "#96E6B3",
    slug: "upcycled",
    subcategories: [
      { name: "Reworked Hoodies [1.0]", slug: "reworked-hoodies-1-0" },
      { name: "Reworked Hoodies [2.0]", slug: "reworked-hoodies-2-0" },
      { name: "Reworked Crewneck", slug: "reworked-crewneck" },
      { name: "Reverse Flares", slug: "reverse-flares" },
    ],
  },
]

const seed = async () => {
  const payload = await getPayload({config});

  for (const category of categories) {
    const parentCategory = await payload.create({
      collection: "categories",
      data: {
        name: category.name,
        slug: category.slug,
        colour: category.color,
        parent: null,
      },
    });

    for (const subCategory of category.subcategories || []) {
      await payload.create({
        collection: "categories",
        data: {
          name: subCategory.name,
          slug: subCategory.slug,
          colour: category.color,
          parent: parentCategory.id,
        },
      });
    }
  }
}

try {
  console.log("Running seed script...");
  await seed();
  console.log("Seed script finished successfully.");
  process.exit(0);
} catch (error) {
  console.error("Error running seed script:", error);
  process.exit(1);
}