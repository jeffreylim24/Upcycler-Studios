import z from "zod";
import { TRPCError } from "@trpc/server";

import { createTRPCRouter, protectedProcedure } from "@/trpc/init";

export const reviewsRouter = createTRPCRouter({
  getOne: protectedProcedure
    .input(
      z.object({
        productId: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const product = await ctx.payload.findByID({
        collection: 'products',
        id: input.productId,
      });

      if (!product) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: `Product with ID ${input.productId} not found`,
        });
      }

      const reviewsData = await ctx.payload.find({
        collection: 'reviews',
        limit: 1,
        where: {
          and: [
            {
              product: { equals: input.productId },
            },
            {
              user: { equals: ctx.session.user.id },
            },
          ]
        },
      });

      const review = reviewsData?.docs?.[0] || null;
    
      return review;
    }),

  create: protectedProcedure
    .input(
      z.object({
        productId: z.string(),
        rating: z.number().min(1, { message: "Rating is required" }).max(5, { message: "Rating must be at most 5" }),
        description: z.string().min(1, { message: "Description is required" }),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const product = await ctx.payload.findByID({
        collection: 'products',
        id: input.productId,
      });

      if (!product) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: `Product not found`,
        });
      }

      const existingReviews = await ctx.payload.find({
        collection: 'reviews',
        where: {
          and: [
            {
              product: { equals: input.productId },
            },
            {
              user: { equals: ctx.session.user.id },
            }
          ]
        }
      });

      if (existingReviews.totalDocs > 0) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'You have already submitted a review for this product',
        });
      }

      const review = await ctx.payload.create({
        collection: 'reviews',
        data: {
          user: ctx.session.user.id,
          product: product.id,
          rating: input.rating,
          description: input.description,
        },
      });

      return review;
    }),

  update: protectedProcedure
    .input(
      z.object({
        reviewId: z.string(),
        rating: z.number().min(1, { message: "Rating is required" }).max(5, { message: "Rating must be at most 5" }),
        description: z.string().min(1, { message: "Description is required" }),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const existingReview = await ctx.payload.findByID({
        depth: 0, // existingReview.user will be the user ID
        collection: 'reviews',
        id: input.reviewId,
      });

      if (!existingReview) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: `Review not found`,
        });
      }

      if (existingReview.user !== ctx.session.user.id) {
        throw new TRPCError({
          code: 'FORBIDDEN',
          message: 'You do not have permission to update this review',
        });
      }

      const updatedReview = await ctx.payload.update({
        collection: 'reviews',
        id: input.reviewId,
        data: {
          rating: input.rating,
          description: input.description,
        },
      });

      return updatedReview;
    }),
})