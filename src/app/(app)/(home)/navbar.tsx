"use client";

import Link from 'next/link';
import { useState } from 'react';
import { MenuIcon } from 'lucide-react';
import { Poppins } from 'next/font/google';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useTRPC } from '@/trpc/client';
import { useQuery } from '@tanstack/react-query';

import { NavbarSidebar } from './navbar-sidebar';


const poppins = Poppins({
    subsets: ["latin"],
    weight: ["700"],
});


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
    return (
        <Button 
            asChild 
            variant='outline' 
            className={cn("bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg",
                isActive && "bg-black text-white hover:bg-black hover:text-white"
        )}> 
            <Link href={href}>
               {children}
            </Link>
        </Button>
    );
};

const navbarItems = [
    { href: "/", children: "Home" },
    { href: "/about", children: "About" },
    { href: "/featured", children: "Featured" },
    { href: "/men", children: "Men" },
    { href: "/women", children: "Women" },
    { href: "/contact", children: "Contact Us" },
]

export const Navbar = () => {
    const pathName = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const trpc = useTRPC();
    const session = useQuery(trpc.auth.session.queryOptions());

    return (
        <nav className="h-20 flex border-b justify-between font-medium bg-white">
            <Link href="/" className="pl-6 flex items-center">
                <Image src="/Logo.png" alt="Logo" width={70} height={70} className="mr-3"/>
                <span className={cn("text-4xl font-semibold",  poppins.className)}>
                    Upcycler Studios
                </span>
            </Link>

            <NavbarSidebar open={isSidebarOpen} onOpenChange={setIsSidebarOpen} items={navbarItems}>

            </NavbarSidebar>

            <div className='items-center gap-4 hidden lg:flex'>
                {navbarItems.map((item) => (
                    <NavbarItem 
                        key={item.href} 
                        href={item.href}
                        isActive={pathName === item.href}
                    >
                        {item.children}
                    </NavbarItem>))}
            </div>

            {session.data?.user ? (
                <div className="hidden lg:flex">
                    <Button asChild variant="secondary" className="border-l border-t-0 border-b-0 border-r-0 px-10 h-full rounded-none bg-white hover:bg-black hover:text-white transition-colors text-lg">
                        <Link href="/admin">
                            Dashboard
                        </Link>
                    </Button>
                </div>
            ) : (
                <div className="hidden lg:flex">
                    <Button asChild variant="secondary" className="border-l border-t-0 border-b-0 border-r-0 px-10 h-full rounded-none bg-white hover:bg-black hover:text-white transition-colors text-lg">
                        <Link prefetch href="/login">
                            Log In
                        </Link>
                    </Button>
                    <Button asChild variant="secondary" className="border-l border-t-0 border-b-0 border-r-0 px-10 h-full rounded-none bg-white hover:bg-black hover:text-white transition-colors text-lg">
                        <Link prefetch href="/signup">
                            Start Selling
                        </Link>
                    </Button>
                </div>
            )}

            <div className="flex lg:hidden items-center justify-center">
                <Button variant="ghost" className="size-12 border-transparent bg-white" onClick={() => setIsSidebarOpen(true)}>
                    <MenuIcon> 
                        
                    </MenuIcon>
                </Button>
            </div>
        </nav>
    );
};
