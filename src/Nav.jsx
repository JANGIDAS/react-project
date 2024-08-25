import React from 'react'
import { Link } from 'react-router-dom';
import './Nav.css'

 const Nav = () => {
  return (
    <nav>
        <h3>aksh mart</h3>
    <ul>
      <li><Link to='/'>home</Link></li>
      <li><Link to='/product'>Product</Link></li>
       <li><Link to='/about'>About</Link></li>
       <li><Link to='/contact'>Contact</Link></li>
       </ul>
    </nav>
  )
}
export default Nav;
