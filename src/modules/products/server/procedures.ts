import z from "zod";
import type { Sort, Where } from "payload";

import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import { Category } from "@/payload-types";

import { sortingValues } from "../search-params";

export const productsRouter = createTRPCRouter({
  getMany: baseProcedure
    .input(
      z.object({
        category: z.string().nullable().optional(),
        minPrice: z.number().nullable().optional(),
        maxPrice: z.number().nullable().optional(),
        tags: z.array(z.string()).nullable().optional(),
        sort: z.enum(sortingValues).nullable().optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const where: Where = {};
      let sort: Sort = "-createdAt";
      console.log("Sorting input:", input.sort);

      if (input.sort === 'curated') {
        sort = 'name'; // Placeholder, replace with actual trending logic
        console.log("Sorting method:", sort);
      }

      if (input.sort === 'trending') {
        sort = 'createdAt'; // Placeholder, replace with actual trending logic
        console.log("Sorting method:", sort);
      }

      if (input.sort === 'hot_and_new') {
        sort = '-createdAt'; // Placeholder, replace with actual trending logic
        console.log("Sorting method:", sort);
      }

      if (input.minPrice != null) {
        where.price = { ...where.price, greater_than_equal: input.minPrice };
      }

      if (input.maxPrice != null) {
        where.price = { ...where.price, less_than_equal: input.maxPrice };
      }

      if (input.category) {
        const categoriesdata = await ctx.payload.find({
          collection: 'categories',
          limit: 1,
          depth: 1, // Populate subcategories, subcategories[0] will be a type of Category
          pagination: false,
          where: {
            slug: {
              equals: input.category,
            },
          },
        });

        const formattedData = categoriesdata.docs.map((doc) => ({
          ...doc,
          subcategories: (doc.subcategories?.docs ?? []).map((doc) => ({
            // Because of 'depth 1', we're confident 'doc' will be a Category
            ...(doc as Category),
            subcategories: undefined,
          }))
        }));

        const subcategoriesSlugs = [];
        const parentCategory = formattedData[0];

        if (parentCategory) {
          subcategoriesSlugs.push(
            ...parentCategory.subcategories.map((subcategory) => subcategory.slug)
          );

          where['category.slug'] = {
            in: [parentCategory.slug, ...subcategoriesSlugs],
          }
        }
      }
      
      if (input.tags && input.tags.length > 0) {
        where['tags.name'] = {
          in: input.tags,
        };
      }

      const data = await ctx.payload.find({
        collection: 'products',
        depth: 1, // Populate 'category' and 'image'
        where,
        sort,
      });
    
      return data;
    }),
})
