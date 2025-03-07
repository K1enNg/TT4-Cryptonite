import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    </> 
)
}

export default Layout