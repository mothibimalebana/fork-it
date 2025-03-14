import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import Content from './assets/components/content/Content.jsx'
import Beef from './assets/components/content/Beef.jsx'

createBrowserRouter([
  {
    path: "/",
    element: <Content/>,
  },
  {
    path: "Beef",
    element: <Beef/>,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)