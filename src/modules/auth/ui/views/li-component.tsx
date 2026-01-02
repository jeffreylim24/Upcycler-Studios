"use client"

import z from "zod"
import Link from "next/link"
import Image from "next/image"
import {toast } from "sonner"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Inter } from 'next/font/google';
import { useRouter } from "next/navigation"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { cn } from "@/lib/utils"
import { useTRPC } from "@/trpc/client"
import { useMutation, useQueryClient } from "@tanstack/react-query"

import { loginSchema } from "../../schemas"
import { on } from "events"

const inter = Inter({
    subsets: ["latin"],
    weight: ["700"],
});

export const LIComponent = () => {
  const router = useRouter();

  const trpc = useTRPC();
  const queryClient = useQueryClient();

  const login = useMutation(trpc.auth.login.mutationOptions({
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries(trpc.auth.session.queryFilter());
      router.push("/");
    }
  }));

  const form = useForm<z.infer<typeof loginSchema>>({
    mode: 'all',
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    login.mutate(values);
  }

  return (
    <div className='min-h-screen flex items-center justify-center px-4 relative'
      style={{
        background: 'radial-gradient(at 86% 72%, #000000 0px, transparent 50%), radial-gradient(at 19% 70%, #332e2e 0px, transparent 50%), radial-gradient(at 82% 9%, #48464e 0px, transparent 50%), radial-gradient(at 44% 98%, #000000 0px, transparent 50%), #000000'
      }}
    >

      {/* Top left logo/name/sign up */}
      <div className="absolute top-8 left-8 right-8 flex items-center justify-between w-auto">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-white.png"
            alt="Logo"
            width={40}
            height={40}
            className="h-7 w-12"
          />
          <span className="text-2xl font-bold text-white tracking-tight">
            Upcycler Studios
          </span>
        </Link>
        <Button asChild variant='ghost' size='sm' className='text-base border-none underline text-white'>
          <Link prefetch href="/signup">
            Sign Up
          </Link>
        </Button>
      </div>
      <div className='w-full max-w-md'>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-6'>
              <h1 className='text-center text-3xl font-semibold text-white mt-8 mb-2'>
                Welcome back!
              </h1>
              <FormField 
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-base text-white'>Email</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        className="bg-white rounded-lg border-none text-black placeholder:text-gray-400 py-3 px-4"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField 
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-base text-white'>Password</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        type='password'
                        className="bg-white rounded-lg border-none text-black placeholder:text-gray-400 py-3 px-4"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                disabled={login.isPending} 
                type='submit' 
                size='lg' 
                variant='elevated' 
                className='bg-white text-black rounded-lg font-semibold hover:bg-black hover:text-white transition'
              >
                Log In
              </Button>
            </form>
          </Form>
        </div>
      </div>
  )
}