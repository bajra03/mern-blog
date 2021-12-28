import React from 'react';
import {  RegisterBg2 } from '../../assets';
import { Button, Gap, Input, Link } from '../../components';
import './register.scss';

function Register() {
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
          <Button title="Register" type="submit" />
          <Gap height={20} />
          <Link title="Back to login" />
        </form>
      </div>
    </div>
  )
}

export default Register
