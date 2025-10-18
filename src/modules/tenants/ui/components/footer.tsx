import Link from 'next/link'
import { Poppins } from 'next/font/google'

import { cn } from '@/lib/utils'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['700'],
});

export const Footer = () => {
  return (
    <footer className='border-t border-gray-800 font-medium bg-[#0a0a0a]'>
      <div className="max-w-(--breakpoint-xl) mx-auto flex items-center h-full gap-2 px-4 py-6 lg:px-12">
        <p className='text-gray-400'>Powered by</p>
        <Link href={`${process.env.NEXT_PUBLIC_APP_URL!}/all`}>
          <span className={cn("text-2xl font-semibold text-white hover:text-gray-300 transition", poppins.className)}>
            Upcycler Studios
          </span>
        </Link>
      </div>
    </footer>
  )
}