"use client";

import { useState } from "react";

import { useSuspenseQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";

import { Categories } from "./categories";
import { SearchInput } from "./search-input";
import { CategoriesSidebar } from "./categories-sidebar";


export const SearchFilters = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.categories.getMany.queryOptions());
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className='px-4 lg:px-12 py-8 border-b flex flex-col gap-4 w-full' style={{ backgroundColor: "#F5F5F0" }}>
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
    </div>
  );
}

export const SearchFiltersSkeleton = () => {
  return (
    <div className='px-4 lg:px-12 py-8 border-b flex flex-col gap-4 w-full' style={{ backgroundColor: "#F5F5F5" }}>
      <SearchInput disabled onOpenSidebar={() => {}} />
      <div className='hidden lg:block'>
        <div className='h-11'/>
      </div>
    </div>
  )
}