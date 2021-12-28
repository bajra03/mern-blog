import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../../components';
import './mainapp.scss'

const MainApp = () => {
  return (
    <div className="mainapp-container">
      <Header />
      <div className="content-container">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default MainApp
