import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
function Layout() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default Layout;
