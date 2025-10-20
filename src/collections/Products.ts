import type { CollectionConfig } from 'payload';
import { lexicalEditor, UploadFeature } from '@payloadcms/richtext-lexical';

import { isSuperAdmin } from '@/lib/access';
import { Tenant } from '@/payload-types';

export const Products: CollectionConfig = {
  slug: 'products',
  access: {
    create: ({ req }) => {
      if (isSuperAdmin(req.user)) return true;

      const tenant = req.user?.tenants?.[0]?.tenant as Tenant;

      return Boolean(tenant?.stripeDetailsSubmitted);
    },
    delete: ({ req }) => isSuperAdmin(req.user),
  },
  admin: {
    useAsTitle: 'name',
    description: 'You must verify your account before creating products',
    defaultColumns: ['name', 'category', 'description', 'price'],
  },  
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      admin: {
        description: 'Price in USD',
      }
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'tags',
      hasMany: false,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          UploadFeature({
            collections: {
              media: {
                fields: [
                  {
                    name: 'name',
                    type: 'text',
                  },
                ],
              },
            },
          }),
        ],
      }),
      admin: {
        description: 'Protected content only visible to customers after purhcase. Add product documentation, downloadable files, getting started guides, and bonus materials. Supports Markdown formatting.'
      }
    },
    {
      name: 'isPrivate',
      label: 'Private',
      defaultValue: false,
      type: 'checkbox',
      admin: {
        description: 'If checked, this product will not be shown on the public storefront.',
      }
    },
    {
      name: 'isArchived',
      label: 'Archive',
      defaultValue: false,
      type: 'checkbox',
      admin: {
        description: 'If checked, this product will be archived.',
      }
    },
    {
      name: 'stock',
      type: 'number',
      required: true,
      defaultValue: 1,
      min: 0,
      admin: {
        description: 'Available inventory for this product. Automatically decrements on purchase. Set to 0 to mark as out of stock.',
      }
    }
  ],
} 