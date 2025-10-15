import { getPayload } from "payload";
import config from "@payload-config"

const categories = [
  {
    name: "All",
    slug: "all",
  },
  {
    name: "Accessories",
    color: "#FFCAB0",
    slug: "accessories",
    subcategories: [
      { name: "Bags", slug: "bags" },
      { name: "Hats", slug: "hats" },
      { name: "Scarves", slug: "scarves" },
      { name: "Belts", slug: "belts" },
      { name: "Jewelry", slug: "jewelry" },
    ],
  },
  {
    name: "Activewear",
    color: "#FFE066",
    slug: "activewear",
    subcategories: [
      { name: "Sports Bras", slug: "sports-bras" },
      { name: "Athletic Shorts", slug: "athletic-shorts" },
      { name: "Track Pants", slug: "track-pants" },
      { name: "Athletic Tops", slug: "athletic-tops" },
    ],
  },
  {
    name: "Bottoms",
    color: "#7EC8E3",
    slug: "bottoms",
    subcategories: [
      { name: "Jeans", slug: "jeans" },
      { name: "Pants", slug: "pants" },
      { name: "Shorts", slug: "shorts" },
      { name: "Skirts", slug: "skirts" },
      { name: "Leggings", slug: "leggings" },
    ],
  },
  {
    name: "Dresses & Jumpsuits",
    color: "#D8B5FF",
    slug: "dresses-jumpsuits",
    subcategories: [
      { name: "Casual Dresses", slug: "casual-dresses" },
      { name: "Formal Dresses", slug: "formal-dresses" },
      { name: "Maxi Dresses", slug: "maxi-dresses" },
      { name: "Jumpsuits", slug: "jumpsuits" },
      { name: "Rompers", slug: "rompers" },
    ],
  },
  {
    name: "Outerwear",
    color: "#FF9AA2",
    slug: "outerwear",
    subcategories: [
      { name: "Jackets", slug: "jackets" },
      { name: "Coats", slug: "coats" },
      { name: "Blazers", slug: "blazers" },
      { name: "Vests", slug: "vests" },
      { name: "Windbreakers", slug: "windbreakers" },
    ],
  },
  {
    name: "Shoes",
    color: "#7B9CCD",
    slug: "shoes",
    subcategories: [
      { name: "Sneakers", slug: "sneakers" },
      { name: "Boots", slug: "boots" },
      { name: "Sandals", slug: "sandals" },
      { name: "Flats", slug: "flats" },
      { name: "Heels", slug: "heels" },
    ],
  },
  {
    name: "Sweaters & Hoodies",
    color: "#96E6B3",
    slug: "sweaters-hoodies",
    subcategories: [
      { name: "Sweaters", slug: "sweaters" },
      { name: "Cardigans", slug: "cardigans" },
      { name: "Hoodies", slug: "hoodies" },
      { name: "Sweatshirts", slug: "sweatshirts" },
    ],
  },
  {
    name: "Tops & Shirts",
    color: "#FFB5D8",
    slug: "tops-shirts",
    subcategories: [
      { name: "T-Shirts", slug: "t-shirts" },
      { name: "Button-Up Shirts", slug: "button-up-shirts" },
      { name: "Blouses", slug: "blouses" },
      { name: "Tank Tops", slug: "tank-tops" },
      { name: "Polo Shirts", slug: "polo-shirts" },
    ],
  },
  {
    name: "Vintage",
    color: "#FFD700",
    slug: "vintage",
    subcategories: [
      { name: "Vintage Band Tees", slug: "vintage-band-tees" },
      { name: "Vintage Denim", slug: "vintage-denim" },
      { name: "Retro Sportswear", slug: "retro-sportswear" },
      { name: "Vintage Outerwear", slug: "vintage-outerwear" },
    ],
  },
  {
    name: "Other",
    slug: "other",
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