"use client";

import { useState } from "react";
import { CustomCategory } from "../types";
import { Categories } from "./categories";
import { SearchInput } from "./search-input";
import { CategoriesSidebar } from "./categories-sidebar";

interface SearchFiltersProps {
  data: CustomCategory[];
}

export const SearchFilters = ({data} : SearchFiltersProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className='px-4 lg:px-12 py-8 border-b flex flex-col gap-4 w-full'>
      <CategoriesSidebar 
        open={isSidebarOpen} 
        onOpenChange={setIsSidebarOpen} 
        data={data}
      />
      <SearchInput 
        data={data} 
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