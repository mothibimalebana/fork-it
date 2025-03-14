import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Content from './assets/components/content/Content.jsx'
import Beef from './assets/components/content/Beef.jsx'
import Sandwich from './assets/components/content/Sandwich.jsx'
import Chicken from './assets/components/content/Chicken.jsx'

const router = createBrowserRouter([
  {
    path: "Chicken",
    element: <Chicken/>,
  },
  {
    path: "Beef",
    element: <Beef/>,
  },
  {
    path: "Sandwich",
    element: <Sandwich/>,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)