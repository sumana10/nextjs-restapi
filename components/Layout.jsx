import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'



function Layout({children}) {
  return (
    <>
      <Navbar/>
      {children}
      
    </>
  )
}

export default Layout