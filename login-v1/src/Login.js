import { useState } from 'react';
import loginIMG from './assets/login.png'
import './styles.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">

            <span className="login-form-title">
              <img src={loginIMG} alt="" />
            </span>

            <div className="wrap-input">
              <input
                className={email !== "" ? 'has-val input' : 'input'}
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder='Email'></span>
            </div>

            <div className="wrap-input">
              <input
                className={password !== "" ? 'has-val input' : 'input'}
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder='Password'></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Login</button>
            </div>

            <div className="text-center">
              <a href="#" className='txt2'>Forgot password?</a>
            </div>

            <div className="text-center">
              <span className="txt1">Don't have an account?</span>
              <a href="#" className="txt3">Register.</a>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
