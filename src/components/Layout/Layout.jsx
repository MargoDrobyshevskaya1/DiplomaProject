import { Outlet} from 'react-router-dom';
import Authorization from '../Authorization/Authorization'
import Registration from '../Registration/Registration'
import Nav from '../Nav/Nav'

const Layout = () => {
  return (
    <>
    <header>
     <div className="wrapper-header">
        <div className="logo">
        <p>Make<span>Up</span> Shop</p>
      </div>
      <div className="authregist-wrapper">
       <div className="alignment">
        <Authorization/>
     
        <Registration/>
   </div>
      </div>
      
     <Nav/>
    </div>
  </header>

  <Outlet/>
</>
  )
}

export default Layout;