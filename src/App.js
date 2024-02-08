import React from 'react'
import Layout from './Component/Layout/Layout'
import { RouterProvider,  createHashRouter } from 'react-router-dom'
import Home from './Component/Home Component/Home'
import About from './Component/About Component/About'
import Portofolio from './Component/Portofolio Component/Portofolio'
import Contact from './Component/Contact Component/Contact'


let routers = createHashRouter([
  {path:'',element:<Layout/> , children:[
    {index:true , element:<Home/>},
    {path:'about' , element:<About/>},
    {path:'portofolio' , element:<Portofolio/>},
    {path:'contact' , element:<Contact/>},
  ]}
])
export default function App() {

  
  return <RouterProvider router={routers}></RouterProvider>
}
