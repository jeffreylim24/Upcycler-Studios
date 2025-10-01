import type { CollectionConfig } from 'payload';

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
  },
  admin: {
    useAsTitle: 'name',
    description: 'You must verify your account before creating products',
    defaultColumns: ['name', 'category', 'description', 'price', 'refundPolicy'], // Add 'category' here
  },  
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      // TODO: Change to RichText
      type: 'text',
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
      hasMany: false,
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
      name: 'refundPolicy',
      type: 'select',
      options: ['30 days', '14 days', '7 days', '3 days', 'No refund'],
      defaultValue: '30 days',
      required: true,
    },
    {
      name: 'content',
      // TODO: Change to RichText
      type: 'textarea',
      admin: {
        description: 'Protected content only visible to customers after purhcase. Add product documentation, downloadable files, getting started guides, and bonus materials. Supports Markdown formatting.'
      }
    },
  ],
} 