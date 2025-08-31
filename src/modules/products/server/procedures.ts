import z from "zod";
import type { Sort, Where } from "payload";

import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import { Category, Media, Tenant } from "@/payload-types";

import { sortingValues } from "../search-params";
import { DEFAULT_LIMIT } from "@/constants";
import { tenantField } from "@payloadcms/plugin-multi-tenant/fields";

export const productsRouter = createTRPCRouter({
  getMany: baseProcedure
    .input(
      z.object({
        cursor: z.number().default(1),
        limit: z.number().default(DEFAULT_LIMIT),
        category: z.string().nullable().optional(),
        minPrice: z.number().nullable().optional(),
        maxPrice: z.number().nullable().optional(),
        tags: z.array(z.string()).nullable().optional(),
        sort: z.enum(sortingValues).nullable().optional(),
        tenantSlug: z.string().nullable().optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const where: Where = {};
      let sort: Sort = "-createdAt";

      if (input.sort === 'curated') {
        sort = 'name'; // Placeholder, replace with actual trending logic
      }

      if (input.sort === 'trending') {
        sort = 'createdAt'; // Placeholder, replace with actual trending logic
      }

      if (input.sort === 'hot_and_new') {
        sort = '-createdAt'; // Placeholder, replace with actual trending logic
      }

      if (input.minPrice != null) {
        where.price = { ...where.price, greater_than_equal: input.minPrice };
      }

      if (input.maxPrice != null) {
        where.price = { ...where.price, less_than_equal: input.maxPrice };
      }

      if (input.tenantSlug) {
        where['tenant.slug'] = {
          equals: input.tenantSlug,
        }
      }

      if (input.category) {
        const categoriesdata = await ctx.payload.find({
          collection: 'categories',
          limit: 1,
          depth: 2, // Populate subcategories, subcategories[0] will be a type of Category
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
        depth: 2, // Populate 'category', 'image' & 'tenant' & 'tenant.image'
        where,
        sort,
        page: input.cursor,
        limit: input.limit,
      });
    
      return {
        ...data,
        docs: data.docs.map((doc) => ({
          ...doc,
          image: doc.image as Media | null,
          tenant: doc.tenant as Tenant & { image: Media | null },
        }))
      }
    }),
})
