"use client"

import Link from "next/link";
import Image from "next/image";
// import dynamic from 'next/dynamic';

import { generateTenantURL } from "@/lib/utils";
import { useTRPC } from "@/trpc/client"
import { useSuspenseQuery } from "@tanstack/react-query";
import { CheckoutButton } from "@/modules/checkout/ui/components/checkout-button";
import { Button } from "@/components/ui/button";
import { ShoppingCartIcon } from "lucide-react";

// Uncomment this to dynamically import the CheckoutButton without SSR if encountering hydration issues
/*
const CheckoutButton = dynamic(
  () => import('@/modules/checkout/ui/components/checkout-button').then(
    (mod) => mod.CheckoutButton
  ), 
  { 
    ssr: false, 
    loading: () => <Button className='bg-white' disabled><ShoppingCartIcon className='text-black' /></Button>,
  }
);
*/

interface Props {
  slug: string;
}

export const Navbar = ({ slug }: Props) => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.tenants.getOne.queryOptions({
    slug,
  }));

  return (
    <nav className='h-20 border-b font-medium bg-white'>
      <div className="max-w-(--breakpoint-xl) mx-auto flex justify-between items-center h-full px-4 lg:px-12">
        <Link href={generateTenantURL(slug)} className='flex items-center gap-2'>
          {data.image?.url && (
            <Image 
              src={data.image.url} 
              width={32} 
              height={32} 
              className='rounded-full border shrink-0 size-[32px]'
              alt={slug}
            />
          )}
          <p className='text-xl'>{data.name.toUpperCase()}</p>
        </Link>
        <CheckoutButton tenantSlug={slug} />
      </div>
    </nav>
  )
}

export const NavbarSkeleton = () => {
  return (
    <nav className='h-20 border-b font-medium bg-white'>
      <div className="max-w-(--breakpoint-xl) mx-auto flex justify-between items-center h-full px-4 lg:px-12">
        <Button className='bg-white' disabled>
          <ShoppingCartIcon className='text-black' />
        </Button>
      </div>
    </nav>
  )
}