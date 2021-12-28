import React from 'react'
import './footer.scss'

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer-container">
      <p>© { year } MERN-Blog. All right reserved.</p>
    </div>
  )
}

export default Footer
