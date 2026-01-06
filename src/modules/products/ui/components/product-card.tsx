import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, StarIcon } from "lucide-react";
import { formatCurrency, generateTenantURL } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  id: string;
  name: string;
  imageUrl?: string | null;
  tenantSlug: string;
  tenantImageUrl?: string | null;
  reviewRating: number | null;
  reviewCount: number;
  price: number;
};

export const ProductCard = ({
  id, 
  name, 
  imageUrl, 
  tenantSlug, 
  tenantImageUrl, 
  reviewRating, 
  reviewCount, 
  price 
}: ProductCardProps) => {
  const router = useRouter();

  const handleUserClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    router.push(generateTenantURL(tenantSlug));
  }

  return (
    <Link href={`${generateTenantURL(tenantSlug)}/products/${id}`}>
      <div className="group cursor-pointer">
        {/* Square product image */}
        <div className="relative aspect-square bg-zinc-900 mb-4 overflow-hidden rounded-xl max-w-md">
          <Image
            alt={name}
            src={imageUrl || '/placeholder-image.jpg'}
            fill
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Shopping bag button appears on hover */}
          <button className="absolute bottom-4 right-4 bg-white text-black p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-zinc-200 rounded-lg">
            <ShoppingBag size={20} />
          </button>
        </div>
        
        {/* Product info */}
        <div className="space-y-1">
          <p className="text-zinc-400 uppercase tracking-wider text-xs">{tenantSlug}</p>
          <h3 className="text-white font-semibold text-lg">{name}</h3>
          <p className="text-white text-sm">{formatCurrency(price)}</p>
        </div>
      </div>
    </Link>
  )
}; 

export const ProductCardSkeleton = () => (
  <div className="animate-pulse">
    <div className="aspect-square bg-zinc-800 mb-4 rounded-xl" />
    <div className="space-y-2">
      <div className="h-3 bg-zinc-800 rounded w-1/3" />
      <div className="h-4 bg-zinc-800 rounded w-2/3" />
      <div className="h-3 bg-zinc-800 rounded w-1/4" />
    </div>
  </div>
);
