import './styles.css';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';
import HomePage from './pages/home/HomePage';
import ForgotPassword from './pages/password/ForgotPassword';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);
  // const [onEdit, setOnEdit] = useState(null);

  const getPosts = async () => {
    try {
      const res = await axios.get('http://localhost:8800');
      setPosts(res.data.sort((a, b) => (a.nickname > b.nickname ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, [setPosts]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/password' element={<ForgotPassword />} />
        <Route path='/home' element={<HomePage posts={posts} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
