import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Content from './assets/components/content/Content.jsx'
import Beef from './assets/components/content/Beef.jsx'
import Ribs from './assets/components/content/Ribs.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "Beef",
    element: <Beef/>,
  },
  {
    path: "Ribs",
    element: <Ribs/>,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)