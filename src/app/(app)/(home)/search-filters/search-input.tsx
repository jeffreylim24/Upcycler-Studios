import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";

import { BookmarkCheckIcon, ListFilterIcon, SearchIcon } from "lucide-react";

interface Props {
  disabled?: boolean;
  onOpenSidebar: () => void;
}

export const SearchInput = ({ disabled, onOpenSidebar }: Props) => {
  const trpc = useTRPC();
  const session = useQuery(trpc.auth.session.queryOptions());

  return (
    <div className='flex items-center gap-2 w-full'>
      <div className='relative w-full'>
        <SearchIcon className='absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-500'/>
        <Input className='pl-8' placeholder='Search products' disabled={disabled}/> 
      </div>
      <Button variant='elevated' className='size-12 shrink-0 flex lg:hidden' onClick={onOpenSidebar}>
        <ListFilterIcon />
      </Button>
      {session.data?.user && (
        <Button asChild variant='elevated' className='h-12 text-base'>
          <Link href="/library">
            <BookmarkCheckIcon />
            Library
          </Link>
        </Button>
      )}
    </div>
  )
}