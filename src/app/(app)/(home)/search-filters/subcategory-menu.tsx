import { Category } from "@/payload-types"
import Link from "next/link"

interface Props {
    category: Category;
    isOpen: boolean;
    position: { top: number; left: number };
}

export const SubcategoryMenu = ({ category, isOpen, position }: Props) => {
    if (!isOpen || !category.subcategories || category.subcategories.length === 0) {
        return null; // Don't render if not open or no subcategories
    }

    const backgroundColor = category.color || "white"; // Fallback to white if no color is provided
    return (
        console.log("subcategories value:", category.subcategories),
        console.log("subcategories typeof:", typeof category.subcategories),

        
        <div
            className="fixed z-100" // Use fixed positioning to ensure it stays in view
            style={{ 
                top: position.top, 
                left: position.left, 
            }}
        >   
        
            {/* Invsisble div to maintain space for dropdown */}
            <div className="h-3 w-60" /> {/* Dropdown container with dynamic background color */}
            <div 
                style={{ backgroundColor}}
                className="w-60 text-black rounded-md overflow-hidden border shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] -translate-x-[2px] -translate-y-[2px]" 
            >
                
                <div>
                                                                      
                    {(category.subcategories?.docs as Category[])?.map((subcategory) => (
                        <Link
                            key={subcategory.slug}
                            href="/"
                            className="w-full text-left p-4 hover:bg-black hover:text-white flex justify-between items-center underline font-medium"
                        >
                            {subcategory.name}
                        </Link>
                        ))}  
                </div>
            </div>
        </div>
    );
};                                                                                                                                           