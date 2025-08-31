import { Category } from '@/payload-types';
import { baseProcedure, createTRPCRouter } from "@/trpc/init";

export const categoriesRouter = createTRPCRouter({
  getMany: baseProcedure.query(async ({ ctx }) => {
    const data = await ctx.payload.find({
      collection: 'categories',
      depth: 2, // Populate subcategories, subcategories[0] will be a type of Category
      pagination: false,
      where: {
        parent: {
          exists: false,
        },
      }, 
      sort: "name",
    });

    const formattedData = data.docs.map((doc) => ({
      ...doc,
      subcategories: (doc.subcategories?.docs ?? []).map((doc) => ({
        // Because of 'depth 1', we're confident 'doc' will be a Category
        ...(doc as Category),
      }))
    }));
    
    return formattedData;
  }),
})