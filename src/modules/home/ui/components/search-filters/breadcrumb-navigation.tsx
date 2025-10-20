import Link from "next/link";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

interface Props {
  activeCategoryName: string | null;
  activeCategory: string;
  activeSubcategoryName: string | null;
}

export const BreadcrumbNavigation = ({ activeCategoryName, activeCategory, activeSubcategoryName }: Props) => {
  if (!activeCategoryName || activeCategory === 'all') return null;

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {activeSubcategoryName ? (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink asChild className='text-xl font-medium underline text-white'>
                <Link href={`\${activeCategory}`}>{activeCategoryName}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className='text-white font-medium text-lg'>
              /
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage className='text-xl font-medium text-white'>
                {activeSubcategoryName}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </>
        ) : (
          <BreadcrumbItem>
            <BreadcrumbPage className='text-xl font-medium text-white'>
              {activeCategoryName}
            </BreadcrumbPage>
          </BreadcrumbItem>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  )
}