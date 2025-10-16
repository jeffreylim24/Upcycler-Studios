import { Suspense } from 'react';
import { Inter } from 'next/font/google';

import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { getQueryClient, trpc } from '@/trpc/server';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SearchFilters, SearchFiltersSkeleton } from "@/modules/home/ui/components/search-filters";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

interface Props {
  children: React.ReactNode;
}

const Layout = async ({ children }: Props) => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpc.categories.getMany.queryOptions(),
  );

  return (
    <div className={`flex flex-col min-h-screen ${inter.className} bg-black`}>
      {/* Navbar - Fixed at top */}
      <Navbar />
      
      {/* Search Filters - Below navbar */}
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<SearchFiltersSkeleton />}>
          <div className="bg-black border-b border-white/10">
            <SearchFilters />
          </div>
        </Suspense>
      </HydrationBoundary>
      
      {/* Main content */}
      <div className="flex-1">
        {children}
      </div>
      
      <Footer />
    </div>
  );
}

export default Layout;