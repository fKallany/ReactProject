import './styles.css';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';
import HomePage from './pages/home/HomePage';
import ForgotPassword from './pages/password/ForgotPassword';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/password' element={<ForgotPassword />} />
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App;
