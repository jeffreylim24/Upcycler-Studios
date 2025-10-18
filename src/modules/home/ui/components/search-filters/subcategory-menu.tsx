import { CategoriesGetManyOutput } from "@/modules/categories/types";
import { Category } from "@/payload-types";

import Link from "next/link";


interface Props {
  category: CategoriesGetManyOutput[1];
  isOpen: boolean;
}

export const SubcategoryMenu = ({ category, isOpen }: Props) => {
  if (!isOpen || !category.subcategories || category.subcategories.length === 0 ) {
    return null;
  }

  return (
    <div
      className='absolute z-100'
      style ={{
        top: '100%',
        left: 0,
      }}
    >
      {/* Invisible bridge to maintain hover */}
      <div className='h-3 w-60'/>

      {/* Subcategory menu */}
      <div className='w-60 bg-[#1a1a1a] text-white rounded-md overflow-hidden border border-gray-700 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] -translate-x-[2px] -translate-y-[2px]'>
        <div>
          {category.subcategories?.map((subcategory: Category) => (
            <Link key={subcategory.slug} href={`/${category.slug}/${subcategory.slug}`} className='w-full text-left p-4 hover:bg-gray-800 hover:text-white flex justify-between items-center underline font-medium'>
              {subcategory.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}