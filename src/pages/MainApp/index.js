import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components';

const MainApp = () => {
  console.log("logged");
  return (
    <div>
      <Header />
      <Outlet />
      <footer>Footer</footer>
    </div>
  )
}

export default MainApp
