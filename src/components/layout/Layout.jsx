
import React from 'react'
import Routers from '../../routes/Routers'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Wallet from '../wallet/Wallet'

const Layout = () => {
  return (
    <>
        <Header/>
        <Wallet/>
        <div>
            <Routers/>
        </div>
        <Footer/>
    </>
  )
}

export default Layout