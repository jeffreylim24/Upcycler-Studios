"use client"

import z from "zod"
import Link from "next/link"
import {toast } from "sonner"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { cn } from "@/lib/utils"
import { useTRPC } from "@/trpc/client"
import { useMutation, useQueryClient } from "@tanstack/react-query"

import { registerSchema } from "../../schemas"

export const SUComponent = () => {
  const router = useRouter();

  const trpc = useTRPC();
  const queryClient = useQueryClient();

  const register = useMutation(trpc.auth.register.mutationOptions({
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries(trpc.auth.session.queryFilter());
      router.push("/");
    }
  }));

  const form = useForm<z.infer<typeof registerSchema>>({
    mode: 'all',
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      username: "",
    },
  });

  const onSubmit = (values: z.infer<typeof registerSchema>) => {
    register.mutate(values);
  }

  const username = form.watch("username");
  const usernameErrors = form.formState.errors.username;

  const showPreview = username && !usernameErrors;

  return (
    <div 
      className='min-h-screen flex items-center justify-center px-4 relative'
      style={{
        background: 'radial-gradient(at 86% 72%, #000000 0px, transparent 50%), radial-gradient(at 19% 70%, #332e2e 0px, transparent 50%), radial-gradient(at 82% 9%, #48464e 0px, transparent 50%), radial-gradient(at 44% 98%, #000000 0px, transparent 50%), #000000'
      }}
    >
      <Link 
        href="/" 
        className='absolute top-8 left-8 flex items-center gap-2 text-zinc-400 hover:text-white transition'
      >
        <span className='text-sm'> ◀ Back to homepage</span>
      </Link>

      <div className='w-full max-w-md'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-6'>
            <div className='text-center mb-2 mt-8'>
              <h1 className='text-5xl font-semibold text-white'>
                Create an account
              </h1>
            </div>

            <FormField 
              name='username'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-base text-zinc-200'>Username</FormLabel>
                  <FormControl>
                    <Input {...field}
                      className='bg-zinc-900 border-zinc-800 text-white placeholder-zinc-500 focus:border-white'
                    />
                  </FormControl>
                  <FormDescription className={cn("hidden text-zinc-300", showPreview && "block")}>
                    Your store will be available at&nbsp;
                    <strong className='text-white'>{username}</strong>.upcyclerstudios.com
                  </FormDescription>
                  <FormMessage className='text-red-400' />
                </FormItem>
              )}
            />

            <FormField 
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-base text-zinc-200'>Email</FormLabel>
                  <FormControl>
                    <Input 
                    {...field} 
                    className='bg-zinc-900 border-zinc-800 text-white placeholder-zinc-500 focus:border-white' 
                    />
                  </FormControl>
                  <FormMessage className='text-red-400' />
                </FormItem>
              )}
            />

            <FormField 
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-base text-zinc-200'>Password</FormLabel>
                  <FormControl>
                    <Input 
                    {...field} 
                    type='password'
                    className='bg-zinc-900 border-zinc-800 text-white placeholder-zinc-500 focus:border-white'
                    />
                  </FormControl>
                  <FormMessage className='text-red-400' />
                </FormItem>
              )}
            />

            <Button disabled={register.isPending} type='submit' size='lg' className='bg-white text-black hover:bg-zinc-200 font-semibold mt-4'>
              Create Account
            </Button>

            <p className='text-center text-sm text-zinc-400 mt-4'>
              Already have an account?{' '}
              <Link href="/login" className='text-white hover:underline font-medium'>
                Sign in
              </Link>
            </p>
          </form>
        </Form>
      </div>
    </div>
  )
}