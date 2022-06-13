import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutUs from './Pages/AboutUs/AboutUs';
import Contacts from './Pages/Contacts/Contacts';
import Home from './Pages/Home/Home';
import Catalogue from './Pages/Catalogue/Catalogue';
import Layout from './components/Layout/Layout';
import MyOrders from './Pages/MyOrders/MyOrders';
function App() {
  return ( 
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/catalogue'element={<Catalogue />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/myOrders' element={<MyOrders/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
