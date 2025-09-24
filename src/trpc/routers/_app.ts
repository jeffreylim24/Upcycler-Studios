import { createTRPCRouter } from '../init';

import { authRouter } from '@/modules/auth/server/procedures';
import { productsRouter } from '@/modules/products/server/procedures';
import { categoriesRouter } from '@/modules/categories/server/procedures';
import { tagsRouter } from '@/modules/tags/server/procedures';
import { tenantRouter } from '@/modules/tenants/server/procedures';
import { checkoutRouter } from '@/modules/checkout/server/procedures';
import { libraryRouter } from '@/modules/library/server/procedures';

export const appRouter = createTRPCRouter({
  auth: authRouter,
  tags: tagsRouter,
  tenants: tenantRouter,
  checkout: checkoutRouter,
  products: productsRouter,
  library: libraryRouter,
  categories: categoriesRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;