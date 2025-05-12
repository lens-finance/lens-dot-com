import { createRouter as createTanstackRouter } from '@tanstack/react-router'
import { routerWithQueryClient } from '@tanstack/react-router-with-query'

import {
  getContext,
  Provider as QueryProvider
} from './integrations/tanstack-query/root-provider'
// Import the generated route tree
import { routeTree } from './routeTree.gen'

import './styles.css'
import './animations.css'

// Create a new router instance
export const createRouter = () => {
  const router = routerWithQueryClient(
    createTanstackRouter({
      routeTree,
      context: {
        ...getContext(),
      },
      defaultPendingComponent: () => <div>Loading...</div>,
      defaultPendingMinMs: 500,
      defaultErrorComponent: ({ error }) => (
        <div>Error: {error?.message || 'Unknown error'}</div>
      ),
      scrollRestoration: true,
      defaultPreloadStaleTime: 0,
      // Wrap the app with our query provider
      defaultComponent: ({ children }) => (
        <QueryProvider>{children}</QueryProvider>
      ),
    }),
    getContext().queryClient,
  )

  return router
}

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>
  }
}
