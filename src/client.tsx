import { createRoot } from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'

import { createRouter } from './router'

// Create the router instance
const router = createRouter()

// Create root and render app
createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
