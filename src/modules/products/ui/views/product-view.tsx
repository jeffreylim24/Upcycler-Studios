'use client';

import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useSuspenseQuery } from '@tanstack/react-query';
import { RichText } from '@payloadcms/richtext-lexical/react';

import { StarRating } from '@/components/star-rating';
import { formatCurrency, generateTenantURL } from '@/lib/utils';
import { useTRPC } from '@/trpc/client';
import { Button } from '@/components/ui/button';
import { CheckIcon, LinkIcon, StarIcon } from 'lucide-react';
import { Fragment, useState } from 'react';
import { Progress } from '@/components/ui/progress';
import { toast } from 'sonner';

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

  const [isCopied, setIsCopied] = useState(false);

  return (
    <div className='px-4 lg:px-12 py-10'>
      <div className='border border-gray-700 rounded-sm bg-[#1a1a1a] overflow-hidden'>
        <div className='relative aspect-[3.9] border-b border-gray-700'>
          <Image
            src={data.image?.url || '/placeholder-image.jpg'}
            alt={data.name}
            fill
            className='object-cover'
          />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-6'>
          <div className='col-span-4'>
            <div className='p-6'>
              <h1 className='text-4xl font-medium text-white'>{data.name}</h1>
            </div>
            <div className='border-y border-gray-700 flex'>
              <div className='px-6 py-4 flex items-center justify-center border-r border-gray-700'>
                <div className='relative px-2 py-1 border border-gray-700 bg-white text-black w-fit'>
                  <p className='text-base font-medium'>{formatCurrency(data.price)}</p>
                </div>
              </div>

              <div className='px-6 py-4 flex items-center justify-center lg:border-r lg:border-gray-700'>
                <Link href={generateTenantURL(tenantSlug)} className='flex items-center gap-2'>
                  {data.tenant.image?.url && (
                    <Image
                      alt={data.tenant.name}
                      src={data.tenant.image?.url}
                      width={24}
                      height={24}
                      className='rounded-full border border-gray-700 shrink-0 size-[20px]'
                    />
                  )}
                  <p className='text-base underline font-medium text-white'>
                    {data.tenant.name}
                  </p>
                </Link>
              </div>

              <div className='hidden lg:flex px-6 py-4 items-center justify-center'>
                <div className='flex items-center gap-2'>
                  <StarRating
                    rating={data.reviewRating}
                    iconClassName='size-4'
                  />
                  <p className='text-base font-medium text-white'>
                    {data.reviewCount} ratings
                  </p>
                </div>
              </div>
            </div>

            <div className='block lg:hidden px-6 py-4 items-center justify-center border-b border-gray-700'>
              <div className='flex items-center gap-2'>
                  <StarRating
                    rating={data.reviewRating}
                    iconClassName='size-4'
                  />
                  <p className='text-base font-medium text-white'>
                    {data.reviewCount} ratings
                  </p>
                </div>
            </div>

            <div className='p-6 text-white'>
              {data.description ? (
                <RichText data={data.description as unknown as import("lexical").SerializedEditorState<import("lexical").SerializedLexicalNode>}/>
              ) : (
                <p className='font-medium text-gray-400 italic'>No description provided.</p>
              )}
            </div>
          </div>

          <div className='col-span-2'>
            <div className='border-t border-gray-700 lg:border-t-0 lg:border-l lg:border-gray-700 h-full'>
              <div className='flex flex-col gap-4 p-6 border-b border-gray-700'>
                <div className='flex flex-row items-center gap-2'>
                  <CartButton isPurchased={data.isPurchased} tenantSlug={tenantSlug} productId={productId} stock={data.stock} />
                  <Button
                    className='size-12 bg-[#1a1a1a] border-gray-700 text-white hover:bg-gray-800'
                    variant='elevated'
                    onClick={() => {
                      setIsCopied(true);
                      navigator.clipboard.writeText(window.location.href);
                      toast.success("URL Copied to clipboard!");

                      setTimeout(() => {
                        setIsCopied(false);
                      }, 1000)
                    }}
                    disabled={isCopied}
                  >
                    {isCopied ? <CheckIcon /> : <LinkIcon />}
                  </Button>
                </div>
              </div>

              <div className='p-6'>
                <div  className='flex items-center justify-between'>
                  <h3 className='text-xl font-medium text-white'>Ratings</h3>
                  <div className='flex items-center gap-x-1 font-medum text-white'>
                    <StarIcon className='size-4 fill-yellow-400' />
                    <p>({data.reviewRating})</p>
                    <p className='text-base'>({data.reviewCount} ratings)</p>
                  </div>
                </div>

                <div className='grid grid-cols-[auto_1fr_auto] gap-3 mt-4 text-white'>
                  {[5, 4, 3, 2, 1].map((stars) => (
                    <Fragment key={stars}>
                      <div className='font-medium'>
                        {stars} {stars === 1 ? 'star' : 'stars'}
                      </div>
                      <Progress value={data.ratingDistribution[stars]} className='h-[1lh]'/>
                      <div className='font-medium'>
                        {data.ratingDistribution[stars]}%
                      </div>
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const ProductViewSkeleton = () => {
  return (
    <div className='px-4 lg:px-12 py-10'>
      <div className='border border-gray-700 rounded-sm bg-[#1a1a1a] overflow-hidden'>
        <div className='relative aspect-[3.9] border-b border-gray-700'>
          <Image
            src={'/placeholder.png'}
            alt='Placeholder'
            fill
            className='object-cover'
          />
        </div>
      </div>
    </div>
  )
}