import type { SearchParams } from "nuqs/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { getQueryClient, trpc } from "@/trpc/server";

import { loadProductFilters } from "@/modules/products/search-params";
import { ProductListView } from "@/modules/products/ui/views/product-list-view";
import { DEFAULT_LIMIT } from "@/constants";

interface Props {
  searchParams: Promise<SearchParams>;
}

const Page = async ({ searchParams }: Props) => {
  const filters = await loadProductFilters(searchParams);

  // Convert minPrice and maxPrice to numbers if they are strings
  const parsedFilters = {
    ...filters,
    minPrice: filters.minPrice !== null && filters.minPrice !== undefined ? Number(filters.minPrice) : undefined,
    maxPrice: filters.maxPrice !== null && filters.maxPrice !== undefined ? Number(filters.maxPrice) : undefined,
  };

  const queryClient = getQueryClient();
  void queryClient.prefetchInfiniteQuery(trpc.products.getMany.infiniteQueryOptions({ 
    ...parsedFilters,
    limit: DEFAULT_LIMIT, 
  }));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductListView />
    </HydrationBoundary>
  );
}

export default Page;