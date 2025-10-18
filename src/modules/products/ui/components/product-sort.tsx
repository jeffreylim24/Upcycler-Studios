"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { useProductFilters } from "../../hooks/use-product-filters";

export const ProductSort = () => {
  const [filters, setFilters] = useProductFilters();

  return (
    <div className='flex items-center gap-2'>
      <Button
        size='sm'
        className={cn(
          "rounded-full bg-[#1a1a1a] hover:bg-[#1a1a1a] text-white border-gray-700",
          filters.sort !== 'curated' &&
            "bg-transparent border-transparent hover:border-gray-700 hover:bg-transparent"
        )}
        variant='secondary'
        onClick={() => setFilters({ sort: 'curated' })}
      >
        Curated
      </Button>
      <Button
        size='sm'
        className={cn(
          "rounded-full bg-[#1a1a1a] hover:bg-[#1a1a1a] text-white border-gray-700",
          filters.sort !== 'trending' &&
            "bg-transparent border-transparent hover:border-gray-700 hover:bg-transparent"
        )}
        variant='secondary'
        onClick={() => setFilters({ sort: 'trending' })}
      >
        Trending
      </Button>
      <Button
        size='sm'
        className={cn(
          "rounded-full bg-[#1a1a1a] hover:bg-[#1a1a1a] text-white border-gray-700",
          filters.sort !== 'hot_and_new' &&
            "bg-transparent border-transparent hover:border-gray-700 hover:bg-transparent"
        )}
        variant='secondary'
        onClick={() => setFilters({ sort: 'hot_and_new' })}
      >
        Hot & New
      </Button>
    </div>
  )
}