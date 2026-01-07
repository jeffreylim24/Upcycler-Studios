"use client";

import Link from 'next/link';
import { useState } from 'react';
import { MenuIcon } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useTRPC } from '@/trpc/client';
import { useQuery } from '@tanstack/react-query';

import { NavbarSidebar } from './navbar-sidebar';


interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
};

const NavbarItem = ({
  href,
  children,
  isActive = false,
}: NavbarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    if (href === '/#featured' || href === '/#philosophy') {
      e.preventDefault();

      const sectionId = href === '/#featured' ? 'featured' : 'philosophy';

      if (pathname === '/') {
        // Already on home page, just scroll to section
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        // Navigate to home page with hash
        router.push(href);
      }
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={cn(
        "text-white/70 hover:text-white transition-colors tracking-wide relative",
        isActive && "text-white after:absolute after:-bottom-2 after:left-0 after:w-full after:h-px after:bg-white after:content-['']"
      )}
    >
      {children}
    </Link>
  );
};

const navbarItems = [
  { href: "/", children: "Home" },
  { href: "/#featured", children: "Featured" },
  { href: "/#philosophy", children: "About" },
  { href: "/all", children: "Shop Now" },
]

export const Navbar = () => {
  const pathName = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const trpc = useTRPC();
  const session = useQuery(trpc.auth.session.queryOptions());

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-lg z-[1000] border-b border-white/10">
      <div className="w-full mx-auto px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 text-2xl font-semibold text-white no-underline tracking-tight">
          <Image
            src="/logo-white.png"
            alt="Upcycler Studios Logo"
            width={36}
            height={36}
            className="object-contain"
          />
          <span>Upcycler Studios</span>
        </Link>

        <NavbarSidebar
          open={isSidebarOpen}
          onOpenChange={setIsSidebarOpen}
          items={navbarItems}
          session={session.data}
        />

        <div className='items-center gap-8 hidden lg:flex'>
          {navbarItems.map((item) => (
            <NavbarItem
              key={item.href}
              href={item.href}
              isActive={pathName === item.href}
            >
              {item.children}
            </NavbarItem>
          ))}
        </div>

        {session.data?.user ? (
          <div className="hidden lg:flex">
            <Link
              href="/admin"
              className="text-white/90 hover:text-white transition-colors tracking-wide px-6 py-2 bg-white/10 rounded-md hover:bg-white/20"
            >
              Dashboard
            </Link>
          </div>
        ) : (
          <div className="hidden lg:flex gap-4">
            <Link
              prefetch
              href="/login"
              className="text-white/90 hover:text-white transition-colors tracking-wide px-6 py-2 hover:bg-white/10 rounded-md"
            >
              Log In
            </Link>
            <Link
              prefetch
              href="/signup"
              className="text-white bg-white/10 hover:bg-white/20 transition-colors tracking-wide px-6 py-2 rounded-md"
            >
              Start Selling
            </Link>
          </div>
        )}

        <div className="flex lg:hidden items-center justify-center">
          <Button variant="ghost" className="size-12 border-transparent bg-transparent hover:bg-white/10 text-white" onClick={() => setIsSidebarOpen(true)}>
            <MenuIcon />
          </Button>
        </div>
      </div>
    </nav>
  );
};
