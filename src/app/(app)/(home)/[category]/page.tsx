import type { SearchParams } from "nuqs/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { getQueryClient, trpc } from "@/trpc/server";

import { loadProductFilters } from "@/modules/products/search-params";
import { ProductListView } from "@/modules/products/ui/views/product-list-view";

interface Props {
  params: Promise<{
    category: string;
  }>;
  searchParams: Promise<SearchParams>;
}

const Page = async ({ params, searchParams }: Props) => {
  const { category } = await params;
  const filters = await loadProductFilters(searchParams);

  // Convert minPrice and maxPrice to numbers if they are strings
  const parsedFilters = {
    ...filters,
    minPrice: filters.minPrice !== null && filters.minPrice !== undefined ? Number(filters.minPrice) : undefined,
    maxPrice: filters.maxPrice !== null && filters.maxPrice !== undefined ? Number(filters.maxPrice) : undefined,
  };

  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.products.getMany.queryOptions({ category, ...parsedFilters }));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductListView category={category} />
    </HydrationBoundary>
  );
}

export default Page;