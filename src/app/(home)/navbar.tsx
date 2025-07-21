"use client"

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["700"],
});

interface NavBarItemProps {
    href: string;
    children: React.ReactNode;
    isActive?: boolean;
};

const NavBarItem = (
    { href, children, isActive = false, }: NavBarItemProps  ) => {
    return (
        <Button asChild variant='outline' className={cn("bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg",
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
    { href: "/contact", children: "Contact" },
    { href:"/pricing", children: "Pricing"},
]
export const Navbar = () => {
    const pathName= usePathname(); 
    return (
        <nav className="h-20 flex border-b justify-between font-medium bg-white">
            <Link href="/" className="pl-6 flex items-center">
                <Image 
                    src="/Logo.jpg"
                    alt="Upcycler Studios Logo"
                    width={100}
                    height={100}
                    className="mr-2" />
                <span className={cn("text-5xl font-semibold", poppins.className)}>
                    Upcycler Studios
                </span>
            </Link>

            <div className="items-center gap-4 hidden lg:flex mr-6">
                {navbarItems.map((item) => (
                <NavBarItem 
                    key={item.href}
                    href={item.href}
                    isActive={pathName === item.href}
                >
                    {item.children}
                </NavBarItem>
                ))} 
            </div>

        </nav>
    );
}