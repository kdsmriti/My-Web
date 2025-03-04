import './Layout.css'
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = ({children}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header/>
      <main style={{ flex: 1, padding: '20px' }}>
        <Outlet /> 
        {children}
      </main>
      <Footer />
    </div>
  )
};

export default Layout
