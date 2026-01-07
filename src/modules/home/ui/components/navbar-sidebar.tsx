"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface NavbarItem {
    href: string;
    children: React.ReactNode;
}

interface Props {
    items: NavbarItem[];
    open: boolean;
    onOpenChange: (open: boolean) => void;
    session?: { user: { email: string } | null } | undefined;
}

export const NavbarSidebar = ({ items, open, onOpenChange, session }: Props) => {
    const pathname = usePathname();
    const router = useRouter();

    const handleItemClick = (href: string) => {
        if (href === '/#featured' || href === '/#philosophy') {
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
        onOpenChange(false);
    };

    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent side="left" className="p-0 transition-none">
                <SheetHeader className="p-4 border-b">
                        <SheetTitle>
                            Menu
                        </SheetTitle>
                </SheetHeader>
                <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
                    {items.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="w-full text-left p-4 hover:bg-black hover:text-white flex item-center text-base font-medium"
                            onClick={(e) => {
                                if (item.href === '/#featured' || item.href === '/#philosophy') {
                                    e.preventDefault();
                                }
                                handleItemClick(item.href);
                            }}
                        >
                            {item.children}
                        </Link>
                    ))}
                    <div className="border-t">
                        {session?.user ? (
                            <Link href="/admin" className="w-full text-left p-4 hover:bg-black hover:text-white flex item-center text-base font-medium" onClick={() => onOpenChange(false)}>
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link href="/login" className="w-full text-left p-4 hover:bg-black hover:text-white flex item-center text-base font-medium" onClick={() => onOpenChange(false)}>
                                    Log In
                                </Link>
                                <Link href="/signup" className="w-full text-left p-4 hover:bg-black hover:text-white flex item-center text-base font-medium" onClick={() => onOpenChange(false)}>
                                    Start Selling
                                </Link>
                            </>
                        )}
                    </div>
                </ScrollArea>
            </SheetContent>
        </Sheet>
    );
}