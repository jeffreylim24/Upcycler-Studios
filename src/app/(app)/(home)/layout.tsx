import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { SearchFilters } from "./search-filters";
import configPromise from "@payload-config";
import { getPayload } from "payload";
import { Category } from "@/payload-types" 


interface Props {
    children: React.ReactNode;
};

const Layout = async ({ children }: Props) => {

    const payload = await getPayload({
        config: configPromise,
    });

    const data = await payload.find({
        collection: "categories", // Ensure this matches your collection slug
        depth: 1,
        pagination: false, // Disable pagination if you want all categories
        where: {
            parent: {
                exists: false, // Adjust this condition based on your requirements
            },
        },
    });

    const formattedData = data.docs.map((doc) => ({
        ...doc,
        subcategories: (doc.subcategories?.docs ?? []).map((doc) => ({
            // becasue of depth, we know doc will be a type of category
            ...(doc as Category),
            subcategories: undefined,
        })) 
    })); 

    console.log({
        data,
        formattedData,
    });

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <SearchFilters data={data} />
            <div className="flex-1">
                {children}
            </div>
            
            <Footer />
        </div>
    );
}

export default Layout;