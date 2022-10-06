import React from 'react'
import './header.css'
import CTA from './CTA'

const Header = () => {
  return (
    <div className="container header__container">
        <h5>Seja bem-vindo a Tickr</h5>
        <CTA />
    </div>
  )
}

export default Header