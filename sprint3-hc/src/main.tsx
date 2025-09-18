import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Index from './routes/Index/index.tsx'
import Error from './routes/Error/index.tsx'
import Guia from './routes/Guia/index.tsx'
import Integrantes from './routes/Integrantes/index.tsx'
import FAQ from './routes/FAQ/index.tsx'

const router = createBrowserRouter([
  {path: "/", element: <App/>, errorElement: <Error/>, children:[
    {path:"/", element:<Index/>},

    {path:"/faq", element:<FAQ/>},
    {path:"/integrantes", element:<Integrantes/>},
    {path:"/guia", element:<Guia/>},
  ]}
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
