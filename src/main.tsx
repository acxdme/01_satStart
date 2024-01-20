import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Details from './components/Details.tsx'
const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path: "/home",
    element:<App/>
  },
  {
    path:"/details",
    element:<Details/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

      <RouterProvider router={router} />
  </React.StrictMode>,
)


