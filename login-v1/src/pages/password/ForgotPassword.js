import { useState } from 'react';
import './ForgotPassword.css'

function ForgotPassword() {
  const [email, setEmail] = useState('')

  return (
    <div className="container">
      <div className="container-register">
        <div className="wrap-register">
          <form className="register-form">

            <div className="register-form-title">
              <span className="register-title">Forgot Password?</span>
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

            <div className="container-register-form-btn">
              <button className="register-form-btn">Send Email</button>
            </div>

            <div className="text-center">
              <span className="txt1">Go to</span>
              <a href="/" className='txt2'>Home Page</a>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;