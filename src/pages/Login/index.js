import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginBg } from '../../assets';
import { Button, Gap, Input, Link } from '../../components';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="main-page" style={
      {
        backgroundImage: `url(${LoginBg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }
    }>
      <div className="container">
        <form className="form-container">
          <h1>Login</h1>
          <Input label="" placeholder="Your Email" type="email" id="email" required="true" autocomplete="off" />
          <Gap height={15} />
          <Input label="" placeholder="Password" type="password" id="password" required="true" autocomplete="off" />
          <Gap height={30} />
          <Button title="Login" type="submit" onClick={ () => navigate('/') } />
          <Gap height={20} />
          <Link title="Register here" onClick={()=>navigate('/register') } />
        </form>
      </div>
    </div>
  )
}

export default Login
