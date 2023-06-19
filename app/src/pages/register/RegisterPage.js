import { useState } from 'react';
import './RegisterPage.css'

// React Hook Form
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";

//Yup
import { object, string } from "yup";
const schema = object({
  email: string()
    .required("*Email is a required field"),
  nickname: string()
    .required("*Nickname is a required field")
    .min(4, '*Min 4 characters'),
  password: string()
    .required("*Password is a required field")
    .min(6, '*Min 6 characters.')
    .max(18, '*Max 18 characters.'),
});

function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [nickname, setNickname] = useState('')
  const {
    register,
    handleSubmit: onSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  // const onClick = () => {
  //   window.location.href = '/login';
  // };
  const handleSubmit = (data: any) => {
    console.log(data)
  };

  return (
    <div className="container">
      <div className="container-register">
        <div className="wrap-register">
          <form onSubmit={onSubmit(handleSubmit)} className="register-form">

            <div className="register-form-title">
              <span className="register-title">Create your account</span>
            </div>

            <div className="wrap-input">
              <input
                className={email !== "" ? 'has-val input' : 'input'}
                type="email"
                id="email"
                value={email}
                {...register('email')}
                onChange={e => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder='Email'></span>
              <span className="error">{errors?.email?.message}</span>
            </div>

            <div className="wrap-input">
              <input
                className={nickname !== "" ? 'has-val input' : 'input'}
                type="text"
                id="nickname"
                value={nickname}
                {...register('nickname')}
                onChange={e => setNickname(e.target.value)}
              />
              <span className="focus-input" data-placeholder='Nickname'></span>
              <span className="error">{errors?.nickname?.message}</span>
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

            <div className="container-register-form-btn">
              <button type='submit' className="register-form-btn">Register</button>
              {/* onClick={onClick} */}
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