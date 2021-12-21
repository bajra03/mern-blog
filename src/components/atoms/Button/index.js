import React from 'react';
import './button.scss';

const Button = ({ title, ...rest }) => {
  return (
    <div className="button-container">
      <button className="button" { ...rest }>{ title }</button>
    </div>
  )
}

export default Button
