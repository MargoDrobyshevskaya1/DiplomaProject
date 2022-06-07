import logo from './logo.svg';
import './App.css'

import { Routes, Route } from 'react-router-dom';
import AboutUs from './Pages/AboutUs'
import Contacts from './Pages/Contacts/Contacts'
import Home from './Pages/Home/Home'
import Catalogue from "./Pages/Catalogue/Catalogue";
import Layout from './components/Layout/Layout'
function App() {
  return ( 
    <>
  <Routes>
    <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='/catalogue'element={<Catalogue />} />
    <Route path='/aboutus' element={<AboutUs />} />
     <Route path='/contacts' element={<Contacts />} />
     </Route>
  </Routes>
  </>
  )
}

export default App;
