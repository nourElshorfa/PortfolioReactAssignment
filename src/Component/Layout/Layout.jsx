import React from 'react'
import FooterCollection from '../FooterCollection/FooterCollection'
import Navbar from '../Navbar Component/Navbar'
import { Outlet } from 'react-router-dom'

export default function Layout() {



  return <>
   <Navbar/>
  
  <Outlet></Outlet>

  
  <FooterCollection/>
  </>
}
