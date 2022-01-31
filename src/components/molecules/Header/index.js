import React from 'react'
import './header.scss'
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header-container">
      <div className="logo">
        <p onClick={() => navigate('/') }>MERN-Blog</p>
      </div>
      <div className="nav-container">
        <ul>
          <li onClick={() => navigate('/login') }>Logout</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
