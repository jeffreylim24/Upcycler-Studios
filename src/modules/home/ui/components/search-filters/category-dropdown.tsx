"use client";

import { useRef, useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CategoriesGetManyOutput } from "@/modules/categories/types";

import { SubcategoryMenu } from "./subcategory-menu";

interface Props {
    category: CategoriesGetManyOutput[1];
    isActive?: boolean;
    isNavigationHovered?: boolean;
}

export const CategoryDropdown = ({ category, isActive, isNavigationHovered }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const onMouseEnter = () => {
    if (category.subcategories) {
      setIsOpen(true);
    }
  }

  const onMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className='relative' ref={dropdownRef} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className='relative'>
        <Button variant='elevated' className={cn(
          "h-11 px-4 bg-transparent border-transparent rounded-full hover:bg-[#1a1a1a] hover:border-gray-700 text-white text-base",
          isActive && !isNavigationHovered && "bg-[#1a1a1a] border-gray-700",
          isOpen && "bg-[#1a1a1a] border-gray-700 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] -translate-x-[4px] -translate-y-[4px]"
        )}>
          <Link href={`/${category.slug}`} className='w-full text-left flex items-center justify-between'>
            {category.name}
          </Link>

        </Button>

        {/* Dropdown arrow */}
        {category.subcategories && category.subcategories.length > 0 && (
          <div className={cn(
            "opacity-0 absolute -bottom-3 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-gray-700 left-1/2 -translate-x-1/2",
            isOpen && "opacity-100"
          )} />
        )}
      </div>

      <SubcategoryMenu category={category} isOpen={isOpen} />
    </div>
  )
}