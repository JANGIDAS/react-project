import React from 'react'
import { Link } from 'react-router-dom';
import './Nav.css'
import { TbShoppingCartCheck } from "react-icons/tb";

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
       <Link to={'/add-to-cart'}><span className='cart'><TbShoppingCartCheck size={30}/></span></Link>
    </nav>
  )
}
export default Nav;
