import { Suspense } from "react"

import { ProductF } from "../components/product-filters"
import { ProductSort } from "../components/product-sort"
import { ProductList, ProductListSkeleton } from "../components/product-list"

interface Props {
  category?: string;
  tenantSlug?: string;
  narrowView?: boolean;
}

export const ProductListView = ({ category, tenantSlug, narrowView }: Props) => {
  return (
    <div className='min-h-screen bg-black px-4 lg:px-12 py-8 flex flex-col gap-4'>
      <div className='flex flex-col lg:flex-row lg:items-center gap-y-2 lg:gap-y-0 justify-between'>
        <p className='text-2xl font-medium text-white'>Curated for you</p>
        <ProductSort />
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-5 gap-y-8 gap-x-8'>
        <div className='lg:col-span-2 xl:col-span-1'>
          <ProductF />
        </div>
        <div className='lg:col-span-4 xl:col-span-4'>
          <Suspense fallback={<ProductListSkeleton narrowView={narrowView} />}>
            <ProductList category={category} tenantSlug={tenantSlug} narrowView={narrowView} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

