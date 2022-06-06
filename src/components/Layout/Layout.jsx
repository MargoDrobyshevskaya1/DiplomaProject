import { Outlet} from 'react-router-dom';
import Nav from '../Nav/Nav'
import Orders from "../Orders/Orders"
import Bag from '../Bag/Bag'
import Account from "../Account/Account";
import './Layout.css'

const Layout = () => {
  return (
    <>
    <header>
     <div className="wrapper-header">
        <div className="logo">
        <p>makeup shop.</p>
      </div>
        <Nav/>
        <div className="btns">
         <Orders/>
       
        <Account/>
     
      <Bag/>
      </div>

       
   
    </div>
  </header>

  <Outlet/>
  <footer>
    <div className="footer-inf">
    <p>©2022 Makeupshop. All rights reserved.</p>
    </div>
  </footer>
</>
  )
}

export default Layout;