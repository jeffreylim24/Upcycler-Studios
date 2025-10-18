"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

import { useSuspenseQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";

import { BreadcrumbNavigation } from "./breadcrumb-navigation";
import { Categories } from "./categories";
import { CategoriesSidebar } from "./categories-sidebar";
import { SearchInput } from "./search-input";
import { DEFAULT_BACKGROUND_COLOR } from "../../../constants";

export const SearchFilters = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.categories.getMany.queryOptions());
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const params = useParams();
  const categoryParam = params.category as string | undefined;
  const activeCategory = categoryParam || "all";

  const activeCategoryData = data.find((category) => category.slug === activeCategory);

  // const activeCategoryColor = activeCategoryData?.colour || DEFAULT_BACKGROUND_COLOR;
  // Enable this when you want to use category colors
  const activeCategoryName = activeCategoryData?.name || null;

  const activeSubcategory = params.subcategory as string | undefined;
  const activeSubcategoryName =
    activeCategoryData?.subcategories?.find(
      (subcategory) => subcategory.slug === activeSubcategory
    )?.name || null;

  return (
    <div className='px-4 lg:px-12 py-8 border-b border-gray-800 flex flex-col gap-4 w-full bg-[#0a0a0a]'>
      <CategoriesSidebar
        open={isSidebarOpen}
        onOpenChange={setIsSidebarOpen}
      />
      <SearchInput
        onOpenSidebar={() => setIsSidebarOpen(true)}
      />
      <div className='hidden lg:block'>
        <Categories
          data={data}
          onOpenSidebar={() => setIsSidebarOpen(true)}
        />
      </div>
      <BreadcrumbNavigation
        activeCategoryName={activeCategoryName}
        activeCategory={activeCategory}
        activeSubcategoryName={activeSubcategoryName}
      />
    </div>
  );
}

export const SearchFiltersSkeleton = () => {
  return (
    <div className='px-4 lg:px-12 py-8 border-b border-gray-800 flex flex-col gap-4 w-full bg-[#0a0a0a]'>
      <SearchInput disabled onOpenSidebar={() => {}} />
      <div className='hidden lg:block'>
        <div className='h-11'/>
      </div>
    </div>
  )
}