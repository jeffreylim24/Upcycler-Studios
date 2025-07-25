import { Category } from "@/payload-types";
import { CategoryDropdown } from "./category-dropdown";

interface CategoriesProps {
    data: any;
};

export const Categories = ({ data }: CategoriesProps) => {    return (
        <div>
            {data.docs.map((category: Category) => (
                <div key={category.id}>
                    <CategoryDropdown 
                    category={category}
                    isActive={false} // Adjust based on your logic
                    isNavigationHovered={false} 
                    
                    />
                </div> 
            ))}
        </div>
    );
};
