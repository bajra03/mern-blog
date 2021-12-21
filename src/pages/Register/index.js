import React from 'react'
import {  RegisterBg2 } from '../../assets';
import { Button, Gap, Input } from '../../components';
import './register.scss';

function Register() {
  return (
    <div className="main-page">
      <div className="left">
        <img src={ RegisterBg2 } className="bg-registration" alt="register" />
      </div>
      <div className="right">
        <div className="form-container">
          <h1>Form Register</h1>
          <Input label="" placeholder="Full Name" type="text" id="fullname" required="true" autocomplete="off" />
          <Gap height={15} />
          <Input label="" placeholder="Your Email" type="email" id="email" required="true" autocomplete="off" />
          <Gap height={15} />
          <Input label="" placeholder="Password" type="password" id="password" required="true" autocomplete="off" />
          <Gap height={30} />
          <Button title="Register" type="submit" />
        </div>
      </div>
    </div>
  )
}

export default Register
