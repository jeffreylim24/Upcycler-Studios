'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useSuspenseQuery } from '@tanstack/react-query';
import { RichText } from '@payloadcms/richtext-lexical/react';
import { StarRating } from '@/components/star-rating';
import { formatCurrency } from '@/lib/utils';
import { useTRPC } from '@/trpc/client';
import { Button } from '@/components/ui/button';

const CartButton = dynamic(
  () => import('../components/cart-button').then(
    (mod) => mod.CartButton
  ), 
  { 
    ssr: false, 
    loading: () => <Button className='flex-1 size-12' disabled>Add to cart</Button>,
  }
);

interface ProductViewProps {
  productId: string;
  tenantSlug: string;
}

export const ProductView = ({ productId, tenantSlug }: ProductViewProps) => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.products.getOne.queryOptions({ id: productId }));

  return (
    <div className="bg-white rounded-xl shadow-lg p-12 max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
      {/* Left: Image and favorite icon */}
      <div className="flex-1 flex items-start">
        <div className="relative w-full aspect-square bg-gray-100 rounded-lg overflow-hidden">
          <Image
            src={data.image?.url || '/placeholder-image.jpg'}
            alt={data.name}
            fill
            className="object-cover"
            priority
          />
          <button className="absolute top-4 left-4 bg-black text-white rounded-full p-2 shadow">
            {/* TODO: Implement favorite functionality */}
            {/* Heart icon */}
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
              <path d="M10 17l-1.45-1.32C4.4 11.36 2 9.28 2 6.5 2 4.5 3.5 3 5.5 3c1.54 0 3.04.99 3.57 2.36h1.87C11.46 3.99 12.96 3 14.5 3 16.5 3 18 4.5 18 6.5c0 2.78-2.4 4.86-6.55 9.18L10 17z"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Right: Product info */}
      <div className="flex-1 flex flex-col gap-6 justify-center">
        <h1 className="text-3xl font-bold text-black">{data.name}</h1>
        <div className="flex items-end gap-2">
          <span className="text-5xl font-bold text-black">{formatCurrency(data.price)}</span>
        </div>
        <div className="flex items-center gap-3">
          <StarRating rating={data.reviewRating} iconClassName="size-5" />
          <span className="text-base text-gray-600 font-medium">
            {data.reviewRating} ({data.reviewCount} ratings)
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <label className="block text-base text-black mb-0">Size</label>
          <div className="relative w-24">
            {/* TODO: Implement size stock into products */}
            <select 
              defaultValue="S"
              className="border border-gray-300 rounded-lg w-24 p-2 text-black bg-white appearance-none pr-8"
            >
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
            <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 8l4 4 4-4"/>
              </svg>
            </span>
          </div>
          {/* TODO: Implement size stock into products */}
          <div className="text-sm text-green-700">In Stock</div>
        </div>
        <CartButton className="bg-black text-white rounded-lg w-full py-3 mt-2 font-semibold hover:bg-gray-900 transition" isPurchased={data.isPurchased} tenantSlug={tenantSlug} productId={productId} />
        <details className="mt-4 border-gray-500 rounded-lg bg-white">
          <summary className="cursor-pointer px-4 py-2 font-medium text-black">Description</summary>
          <div className="px-4 py-2 text-gray-700">
            {data.description ? (
              <RichText data={data.description as unknown as import("lexical").SerializedEditorState<import("lexical").SerializedLexicalNode>}/>
            ) : (
              <span className="italic text-gray-400">No description provided.</span>
            )}
          </div>
        </details>
      </div>
    </div>
  )
}

export const ProductViewSkeleton = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-12 max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
      {/* Left: Image skeleton */}
      <div className="flex-1 flex items-start">
        <div className="relative w-full aspect-square bg-gray-200 rounded-lg overflow-hidden animate-pulse" />
      </div>
      {/* Right: Info skeleton */}
      <div className="flex-1 flex flex-col gap-6 justify-center">
        <div className="h-8 w-2/3 bg-gray-200 rounded animate-pulse" />
        <div className="flex items-end gap-2">
          <div className="h-6 w-6 bg-gray-200 rounded animate-pulse" />
          <div className="h-12 w-32 bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="h-5 w-40 bg-gray-200 rounded animate-pulse" />
        <div className="h-5 w-24 bg-gray-200 rounded animate-pulse" />
        <div className="flex gap-6">
          <div className="h-10 w-40 bg-gray-200 rounded-lg animate-pulse" />
          <div className="h-10 w-40 bg-gray-200 rounded-lg animate-pulse" />
        </div>
        <div className="h-12 w-full bg-gray-200 rounded-lg animate-pulse" />
        <div className="h-24 w-full bg-gray-200 rounded-lg animate-pulse mt-4" />
        <div className="mt-6">
          <div className="h-6 w-24 bg-gray-200 rounded animate-pulse mb-2" />
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center gap-3 mb-2">
              <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
              <div className="h-2 w-40 bg-gray-200 rounded animate-pulse flex-1" />
              <div className="h-4 w-8 bg-gray-200 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}