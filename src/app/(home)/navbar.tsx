"use client";

import Link from 'next/link';
import { Poppins } from 'next/font/google';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

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
    return (
        <nav className="h-20 flex border-b justify-between font-medium bg-white pr-6">
            <Link href="/" className="pl-6 flex items-center">
                <Image src="/Logo.png" alt="Logo" width={70} height={70} className="mr-3"/>
                <span className={cn("text-5xl font-semibold",  poppins.className)}>
                    Upcycler Studios
                </span>
            </Link>

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
        </nav>
    );
};
