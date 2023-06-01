import { useState } from 'react';
import loginIMG from './../../assets/login.png'
import './LoginPage.css'

// React Hook Form
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";

//Yup
import { object, string } from "yup";
const schema = object({
  email: string()
    .required("*Email is a required field"),
  password: string()
    .required("*Password is a required field")
    .min(6, '*Min 6 characters.')
    .max(18, '*Max 18 characters.'),
});

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {
    register,
    handleSubmit: onSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onClick = () => {
    window.location.href = '/home';
  };
  const handleSubmit = (data: any) => {
    console.log(data)
  };
  console.log(errors)
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form onSubmit={onSubmit(handleSubmit)} className="login-form">

            <span className="login-form-title">
              <img src={loginIMG} alt="" />
            </span>

            <div className="wrap-input">
              <input
                className={email !== "" ? 'has-val input' : 'input'}
                type="email"
                id="email"
                value={email}
                {...register('email')}
                onChange={e => setEmail(e.target.value)}
              />
              <span className="focus-input error" data-placeholder='Email'></span>
              <span className="error">{errors?.email?.message}</span>
            </div>

            <div className="wrap-input">
              <input
                className={password !== "" ? 'has-val input' : 'input'}
                type="password"
                id="password"
                value={password}
                {...register('password')}
                onChange={e => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder='Password'></span>
              <span className="error">{errors?.password?.message}</span>
            </div>

            <div className="container-login-form-btn">
              <button type='submit' className="login-form-btn">Login</button>
            </div>

            <div className="text-center">
              <a href="/password" className='txt2'>Forgot password?</a>
            </div>

            <div className="text-center">
              <span className="txt1">Don't have an account?</span>
              <a href="/register" className="txt3">Register.</a>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
