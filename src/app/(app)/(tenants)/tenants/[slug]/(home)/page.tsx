import type { SearchParams } from "nuqs";

import { getQueryClient, trpc } from "@/trpc/server";
import { DEFAULT_LIMIT } from "@/constants";

import { ProductListView } from "@/modules/products/ui/views/product-list-view";
import { loadProductFilters } from "@/modules/products/search-params";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

interface Props {
  searchParams: Promise<SearchParams>;
  params: Promise<{ slug: string }>;
}

const Page = async ({ searchParams, params }: Props) => {
  const { slug } = await params;
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
    tenantSlug: slug, // SPENT SO LONG ON THIS CCB apparently it can't be before the ...parsedFilters if not it won't work idk why
    limit: DEFAULT_LIMIT, 
  }));
  
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductListView tenantSlug={slug} narrowView />
    </HydrationBoundary>
  )
}

export default Page;