import logo from './logo.svg';
import './header.css'

import { Routes, Route, Link } from 'react-router-dom';
import AboutUs from './Pages/AboutUs'
import Contacts from './Pages/Contacts'
import Home from './Pages/Home'
import Layout from './components/Layout/Layout'
function App() {
  return ( 
    <>
  <Routes>
    <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='/aboutus' element={<AboutUs />} />
     <Route path='/contacts' element={<Contacts />} />
     </Route>
  </Routes>
  </>
  )
}

export default App;
