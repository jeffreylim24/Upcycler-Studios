"use client"

import { ChevronDownIcon, ChevronRightIcon } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { TagsFilter } from "./tags-filter";
import { PriceFilter } from "./price-filter";
import { useProductFilters } from "../../hooks/use-product-filters";

interface ProductFilterProps {
  title: string;
  className?: string;
  children: React.ReactNode;
}

const ProductFilter = ({ title, className, children }: ProductFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const Icon = isOpen ? ChevronDownIcon : ChevronRightIcon;

  return (
    <div className={cn("p-4 border-b border-gray-700 flex flex-col gap-2", className)}>
      <div onClick={() => setIsOpen((current) => !current)} className='flex items-center justify-between cursor-pointer'>
        <p className='font-medium text-white'>{title}</p>
        <Icon className='size-5 text-gray-300'/>
      </div>
      {isOpen && children}
    </div>
  )
}

export const ProductF = () => {
  const [filters, setFilters] = useProductFilters();

  const hasAnyFilters = Object.entries(filters).some(([key, value]) => {
    if (key === 'sort') return false;

    if (Array.isArray(value)) {
      return value.length > 0;
    }

    if (typeof value === 'string') {
      return value !== '';
    }

    return value !== null;
  });

  const onChange = (key: keyof typeof filters, value: unknown) => {
    setFilters({ ...filters, [key]: value })
  }

  const onClear = () => {
    setFilters({
      minPrice: '',
      maxPrice: '',
      tags: [],
    });
  }

  return (
    <div className='border border-gray-700 rounded-md bg-[#1a1a1a]'>
      <div className='p-4 border-b border-gray-700 flex items-center justify-between'>
        <p className='font-medium text-white'>Filters</p>
        {hasAnyFilters && (
          <button className='underline cursor-pointer text-gray-300 hover:text-white transition' onClick={onClear} type='button'>
            Clear
          </button>
        )}
      </div>
      <ProductFilter title='Price'>
        <PriceFilter
          minPrice={filters.minPrice}
          maxPrice={filters.maxPrice}
          onMinPriceChange={(value) => onChange("minPrice", value)}
          onMaxPriceChange={(value) => onChange("maxPrice", value)}
        />
      </ProductFilter>
      <ProductFilter title='Tags' className='border-b-0'>
        <TagsFilter
          value={filters.tags}
          onChange={(value) => onChange("tags", value)}
        />
      </ProductFilter>
    </div>
  )
}