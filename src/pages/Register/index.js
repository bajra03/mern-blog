import React from 'react';
import { useNavigate } from 'react-router-dom';
import {  RegisterBg2 } from '../../assets';
import { Button, Gap, Input, Link } from '../../components';
import './register.scss';

function Register() {
  const navigate = useNavigate();

  return (
    <div className="main-page" style={
      {
        backgroundImage: `url(${RegisterBg2})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }
    }>
      <div className="container">
        <form className="form-container">
          <h1>Form Register</h1>
          <Input label="" placeholder="Full Name" type="text" id="fullname" required="true" autocomplete="off" />
          <Gap height={15} />
          <Input label="" placeholder="Your Email" type="email" id="email" required="true" autocomplete="off" />
          <Gap height={15} />
          <Input label="" placeholder="Password" type="password" id="password" required="true" autocomplete="off" />
          <Gap height={30} />
          <Button title="Register" type="submit" onClick={ () => navigate('/login') } />
          <Gap height={20} />
          <Link title="Back to login" onClick={ () => navigate('/login') } />
        </form>
      </div>
    </div>
  )
}

export default Register
