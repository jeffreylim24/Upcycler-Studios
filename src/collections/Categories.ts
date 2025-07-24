import type { CollectionConfig, CollectionSlug } from "payload";

export const Categories: CollectionConfig = {
    slug: "categories",
    fields: [
        {
            name: "name",
            type: "text",
            required: true,

        },
        {
            name: "parent",
            type: "relationship",
            relationTo: "categories" as CollectionSlug, // self-referencing
            required: false,
        },
    ],
};