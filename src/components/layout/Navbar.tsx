"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-lg z-[1000] border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-8 py-4 flex justify-between items-center">
        <div className="nav-logo">
          <Link href="/" className="flex items-center gap-3 text-2xl font-semibold text-white no-underline tracking-tight lowercase">
            <Image 
              src="/logo-white.png" 
              alt="Upcycler Studios Logo" 
              width={19} 
              height={19} 
              className="object-contain"
            />
            <span>upcycler studios</span>
          </Link>
        </div>
        <div className="flex gap-8">
          <Link 
            href="/" 
            className={`text-white/70 hover:text-white transition-colors lowercase tracking-wide relative ${
              pathname === "/" ? "text-white after:absolute after:-bottom-2 after:left-0 after:w-full after:h-px after:bg-white after:content-['']" : ""
            }`}>
            home
          </Link>
          <Link 
            href="/about" 
            className={`text-white/70 hover:text-white transition-colors lowercase tracking-wide relative ${
              pathname === "/about" ? "text-white after:absolute after:-bottom-2 after:left-0 after:w-full after:h-px after:bg-white after:content-['']" : ""
            }`}>
            about
          </Link>
          <Link 
            href="/contact" 
            className={`text-white/70 hover:text-white transition-colors lowercase tracking-wide relative ${
              pathname === "/contact" ? "text-white after:absolute after:-bottom-2 after:left-0 after:w-full after:h-px after:bg-white after:content-['']" : ""
            }`}>
            contact us
          </Link>
        </div>
      </div>
    </nav>
  );
};