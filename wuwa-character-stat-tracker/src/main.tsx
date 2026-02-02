import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './App.tsx'
import { NextPage } from './pages/NextPage.tsx';
import { NotFoundPage } from './pages/NotFoundPage.tsx';


//creating router
const router = createBrowserRouter([
  {path:"/", element:<App/>},
  {path:"/Next-Page", element:<NextPage/>},
  {path:"*", element:<NotFoundPage/>}
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
