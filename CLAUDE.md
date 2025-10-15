# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Upcycler Studios is a **multi-tenant e-commerce marketplace** built with Next.js 15, PayloadCMS 3, and Stripe. The platform allows multiple vendors (tenants) to run their own stores under custom subdomains, with centralized product management and payment processing. Users can browse products across all stores or visit individual tenant stores.

## Tech Stack

- **Frontend**: Next.js 15 (App Router), React 19, TypeScript
- **CMS/Backend**: PayloadCMS 3 with MongoDB adapter
- **API Layer**: tRPC for type-safe API calls
- **Payments**: Stripe with multi-tenant support
- **Storage**: Vercel Blob Storage for media
- **Styling**: Tailwind CSS v4, Radix UI components
- **State Management**: Zustand
- **Forms**: React Hook Form with Zod validation

## Common Commands

### Development
```bash
bun dev                 # Start development server (localhost:3000)
```

### Build & Production
```bash
bun run build          # Build for production
bun run start          # Start production server
bun run lint           # Run ESLint
```

### Payload CMS
```bash
bun run generate:types       # Generate TypeScript types from Payload collections
bun run generate:importmap   # Generate import map for Payload
```

### Database Operations
```bash
bun run db:fresh        # Fresh migration (destructive)
bun run db:seed         # Seed categories and tags
bun run db:admin        # Create admin user
bun run db:tags         # Seed tags specifically
```

## Architecture

### Multi-Tenancy System

The application implements multi-tenancy using the `@payloadcms/plugin-multi-tenant` plugin. Key concepts:

- **Root domain** (`NEXT_PUBLIC_ROOT_DOMAIN`): Main marketplace at `example.com`
- **Tenant subdomains**: Individual stores at `[slug].example.com`
- **Middleware** (`src/middleware.ts:16-28`): Rewrites subdomain requests to `/tenants/[slug]` routes
- **Access control**: Super-admins have full access; regular users can only manage their own tenant's data

Tenants must complete Stripe onboarding before they can create products. The `stripeDetailsSubmitted` flag gates product creation (`src/collections/Products.ts:10-16`).

### Project Structure

```
src/
├── app/
│   ├── (app)/              # Main application routes
│   │   ├── (auth)/         # Login, signup
│   │   ├── (home)/         # Public marketplace pages
│   │   ├── (library)/      # User's purchased products
│   │   ├── (tenants)/      # Tenant-specific routes
│   │   └── api/            # API routes (tRPC, Stripe webhooks)
│   └── (payload)/          # PayloadCMS admin routes
│       └── admin/          # Admin panel at /admin
├── collections/            # Payload CMS collections (Users, Products, Orders, etc.)
├── modules/                # Feature modules with tRPC procedures
│   ├── auth/
│   ├── products/
│   ├── checkout/
│   ├── library/
│   └── [feature]/
│       └── server/
│           └── procedures.ts  # tRPC endpoints for this feature
├── trpc/                   # tRPC configuration
│   ├── init.ts            # tRPC context, procedures (baseProcedure, protectedProcedure)
│   ├── routers/_app.ts    # Main app router aggregating all module routers
│   ├── client.tsx         # Client-side tRPC setup
│   └── server.tsx         # Server-side tRPC setup
├── lib/                    # Shared utilities
│   ├── access.ts          # Access control helpers (isSuperAdmin)
│   ├── stripe.ts          # Stripe client initialization
│   └── utils.ts           # General utilities
├── components/            # Shared React components
├── hooks/                 # Custom React hooks
└── payload.config.ts      # PayloadCMS configuration
```

### tRPC API Architecture

All API logic is organized in feature modules under `src/modules/[feature]/server/procedures.ts`. The main router (`src/trpc/routers/_app.ts:12-21`) aggregates routers from:

- `auth`: Authentication (login, signup, session management)
- `products`: Product queries and mutations
- `categories`: Category and subcategory data
- `tags`: Product tags
- `tenants`: Tenant management
- `checkout`: Stripe checkout session creation
- `library`: User's purchased products
- `reviews`: Product reviews

**Procedures**:
- `baseProcedure`: Injects Payload CMS instance into context
- `protectedProcedure`: Requires authenticated user, adds session to context

Access tRPC from:
- **Server components**: Use `src/trpc/server.tsx` caller
- **Client components**: Use `src/trpc/client.tsx` hooks

### Payload Collections

Core collections defined in `src/collections/`:

- **Users** (`Users.ts`): Authentication, roles (`super-admin`, `user`), tenant associations
- **Tenants** (`Tenants.ts`): Stores with slug, name, image, Stripe account
- **Products** (`Products.ts`): Name, price, description, category, tags, protected content
- **Orders** (`Orders.ts`): Purchase records with Stripe session references
- **Categories** (`Categories.ts`): Product categories with optional subcategories
- **Tags** (`Tag.ts`): Product tags for filtering
- **Media** (`Media.ts`): File uploads stored in Vercel Blob
- **Reviews** (`Reviews.ts`): Product reviews and ratings

Access control is enforced at the collection level using `isSuperAdmin()` helper.

### Stripe Integration

- **Account structure**: Uses Stripe Connect for multi-tenant payouts
- **Checkout flow**: Creates checkout session via `checkout.createSession` tRPC procedure
- **Webhooks**: Handled at `src/app/(app)/api/stripe/webhooks/route.ts`
- **Onboarding**: Tenants must verify Stripe account before creating products

### Route Groups

- `(app)`: Main application with middleware for subdomain routing
- `(payload)`: PayloadCMS admin interface at `/admin` (no middleware)
- `(auth)`, `(home)`, `(library)`, `(tenants)`: Layout groupings within app

### Environment Variables

Required variables (see `.env.example`):

- `DATABASE_URI`: MongoDB connection string
- `PAYLOAD_SECRET`: Payload CMS secret key
- `NEXT_PUBLIC_ROOT_DOMAIN`: Root domain for tenant subdomains
- `STRIPE_SECRET_KEY`: Stripe secret key
- `BLOB_READ_WRITE_TOKEN`: Vercel Blob storage token

## Key Patterns

### Multi-Tenant Data Access

Products and other tenant-scoped resources use the `tenantsArrayField` pattern. Users are associated with tenants, and super-admins can access all tenants. Regular users only see/edit their own tenant's data.

### Path Aliases

- `@/*`: Maps to `src/*`
- `@payload-config`: Maps to `src/payload.config.ts`

### Type Generation

After modifying Payload collections, run `bun run generate:types` to update `src/payload-types.ts`. This file is auto-generated and should not be edited manually.

### Protected Content

Products have a `content` field (rich text with uploads) that's only visible to customers after purchase. The Library module handles displaying purchased products and their protected content.

## Development Workflow

1. **Start dev server**: `bun dev`
2. **Access admin panel**: Navigate to `http://localhost:3000/admin`
3. **Create super-admin**: Run `bun run db:admin` (first time only)
4. **Seed data**: Run `bun run db:seed` for categories/tags
5. **After schema changes**: Run `bun run generate:types`
6. **Test payments**: Use Stripe test mode with test card `4242 4242 4242 4242`

## Testing Tenant Functionality Locally

Since tenant routing relies on subdomains, local testing requires either:
- Modifying `/etc/hosts` to point `*.localhost` to `127.0.0.1`
- Using a service like ngrok to get a real domain
- Testing with production/staging environment
