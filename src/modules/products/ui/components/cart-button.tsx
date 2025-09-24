import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCart } from "@/modules/checkout/hooks/use-cart";

interface Props {
  tenantSlug: string;
  productId: string;
  isPurchased?: boolean;
}

export const CartButton = ({ tenantSlug, productId, isPurchased }: Props) => {
  const cart = useCart(tenantSlug);

  if (isPurchased) {
    return (
      <Button variant='elevated' className='flex-1 size-12 font-medium hover:bg-pink-300' asChild>
        <Link prefetch href={`/library/${productId}`}>
          View in Library
        </Link>
      </Button>
    )
  }

  return (
    <Button variant='elevated' className={cn('flex-1 size-12 hover:bg-pink-300')} onClick={() => cart.toggleProduct(productId)}>
      {cart.isProductInCart(productId) ? 'Remove from cart' : 'Add to cart'}
    </Button>
  )
}