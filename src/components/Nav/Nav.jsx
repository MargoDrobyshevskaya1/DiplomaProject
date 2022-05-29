import React from "react"
import Orders from "../Orders/Orders"
import Basket from '../Basket/Basket'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="">Catalog</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
        <li><Link to="/aboutus">About us</Link></li>
      </ul>
      <Basket/>
      <Orders/>
    </nav>
    </>
  )
}

export default Nav;
