import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCart } from "@/modules/checkout/hooks/use-cart";

interface Props {
  tenantSlug: string;
  productId: string;
  isPurchased?: boolean;
  className?: string;
  stock?: number;
}

export const CartButton = ({ tenantSlug, productId, isPurchased, stock, className }: Props) => {
  const cart = useCart(tenantSlug);
  const currentStock = stock ?? 1;
  const isOutOfStock = currentStock <= 0;

  if (isPurchased) {
    return (
      <Button className={cn('flex-1 size-12 font-medium bg-[#1a1a1a] border-gray-700 text-white hover:bg-gray-800', className)} asChild>
        <Link prefetch href={`/library/${productId}`}>
          View in Library
        </Link>
      </Button>
    )
  }

  if (isOutOfStock) {
    return (
      <Button variant='elevated' className='flex-1 size-12 bg-gray-700 border-gray-600 text-gray-400 cursor-not-allowed' disabled>
        Out of stock
      </Button>
    )
  }

  return (
    <Button className={cn('flex-1 size-12 bg-[#1a1a1a] border-gray-700 text-white hover:bg-gray-800', className)} onClick={() => cart.toggleProduct(productId)}>
      {cart.isProductInCart(productId) ? 'Remove from cart' : 'Add to cart'}
    </Button>
  )
}