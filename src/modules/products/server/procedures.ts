import z from "zod";
import type { Where } from "payload";

import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import { Category } from "@/payload-types";

export const productsRouter = createTRPCRouter({
  getMany: baseProcedure
    .input(
      z.object({
        category: z.string().nullable().optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const where: Where = {};

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
        }

        where['category.slug'] = {
          in: [parentCategory.slug, ...subcategoriesSlugs],
        }
      }
      
      const data = await ctx.payload.find({
        collection: 'products',
        depth: 1, // Populate 'category' and 'image'
        where,
      });
    
      return data;
    }),
})