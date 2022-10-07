import React from 'react'
import { NavLink, Link } from "react-router-dom";

const NAV__LINKS = [
  {
    display: 'Home',
    url: '/home'
  },
  {
    display: 'Buy',
    url: '/buy'
  },
  {
    display: 'Sell',
    url: '/sell'
  },
  {
    display: 'Events',
    url: '/events'
  }
]

const CTA = () => {
  return (

    <div className='nav__menu'>
      <ul  className='nav__list'>
        {NAV__LINKS.map((item, index) => (
          <li className='nav__item btn' key={index}>
            <NavLink to={item.url}>{item.display}</NavLink>
          </li>
        ))}     
      </ul>     
    </div>


  

  )
}

export default CTA