import { Suspense } from 'react';
import { Inter } from 'next/font/google';

import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { getQueryClient, trpc } from '@/trpc/server';
import { Navbar } from "@/modules/home/ui/components/navbar";
import { Footer } from "@/modules/home/ui/components/footer";
import { SearchFilters, SearchFiltersSkeleton } from "@/modules/home/ui/components/search-filters";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

interface Props {
  children: React.ReactNode;
};

const Layout = async ({ children }: Props) => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpc.categories.getMany.queryOptions(),
  );

  return (
    <div className={`flex flex-col min-h-screen ${inter.className} bg-black`}>
      {/* Navbar - Fixed at top */}
      <Navbar />

      {/* Padding to offset fixed navbar, can possibly find a better way */}
      <div className='h-18 bg-black'/> 

      {/* Main content */}
      <div className="flex-1 bg-[#f4f4f0]">
        {children}
      </div>

      {/* Footer - At the bottom */}
      <Footer />
    </div>
  );
}

export default Layout;