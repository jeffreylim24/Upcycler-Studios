import { headers as getHeaders, cookies as getCookies } from "next/headers";

import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import { TRPCError } from "@trpc/server";

import { loginSchema, registerSchema } from "../schemas";
import { generateAuthCookie } from "../utils";

export const authRouter = createTRPCRouter({
  session: baseProcedure.query(async ({ ctx }) => {
    const headers = await getHeaders();
    const session = await ctx.payload.auth({ headers });

    return session;
  }),
  
  register: baseProcedure
    .input(registerSchema)
    .mutation(async ({ input, ctx }) => {
      const existingdata = await ctx.payload.find({
        collection: "users",
        limit: 1,
        where: {
          username: {
            equals: input.username,
          },
        },
      }) 

      const existingUser = existingdata.docs[0];

      if (existingUser) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Username already exists",
        })
      }

      await ctx.payload.create({
        collection: "users",
        data: {
          email: input.email,
          password: input.password, // This will be hashed
          username: input.username,
        },
      });

      const data = await ctx.payload.login({
        collection: "users",
        data: {
          email: input.email,
          password: input.password,
        }
      });

      if (!data.token) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Invalid email or password",
        })
      }

      await generateAuthCookie({
        prefix: ctx.payload.config.cookiePrefix,
        value: data.token,
      });
    }),

  login: baseProcedure
    .input(loginSchema)
    .mutation(async ({ input, ctx }) => {
      const data = await ctx.payload.login({
        collection: "users",
        data: {
          email: input.email,
          password: input.password,
        }
      });

      if (!data.token) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Invalid email or password",
        })
      }

      await generateAuthCookie({
        prefix: ctx.payload.config.cookiePrefix,
        value: data.token,
      });

      return data;
    }),  
})