import { useState } from 'react';
import './RegisterPage.css'

function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [nickname, setNickname] = useState('')
  const onClick = () => {
    window.location.href = '/home';
  };

  return (
    <div className="container">
      <div className="container-register">
        <div className="wrap-register">
          <form className="register-form">

            <div className="register-form-title">
              <span className="register-title">Create your account</span>
            </div>

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
                className={nickname !== "" ? 'has-val input' : 'input'}
                type="text"
                value={nickname}
                onChange={e => setNickname(e.target.value)}
              />
              <span className="focus-input" data-placeholder='Nickname'></span>
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

            <div className="container-register-form-btn">
              <button type='button' onClick={onClick} className="register-form-btn">Register</button>
            </div>

            <div className="text-center">
              <span className="txt1">Go to</span>
              <a href="/" className='txt2'>Login Page</a>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;