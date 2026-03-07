import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Loading from './utils/Loading.jsx';
import Navbar from './components/ui/navbar/Navbar.jsx';
import { Home } from './components/ui/pages/Home.jsx';
import { SignUp } from './pages/auth/SignUp.jsx';
import { SignIn } from './pages/auth/SignIn.jsx';
import { ForgotPassword } from './pages/auth/Forgot-password.jsx';
import useGetUser from './hooks/getUser.jsx';
import { useSelector } from 'react-redux';

export const serverUrl= "https://swiggy-backend-zvk9.onrender.com"

function App() {
  const [loading, setLoading] = useState(true);
  useGetUser();
  
  const {userData, authLoading} = useSelector(state=>state.user);

  useEffect(() => {
  const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading || authLoading) {
    return <Loading />;
  }

  return (
      <div className='App'>
        <Navbar />  
        <Routes>
          <Route path='/' element={userData?<Home/>: <Navigate to={"/signin"}/>} />
          <Route path="/signup" element= { !userData?<SignUp/>:<Navigate to={"/"} />} />
          <Route path="/signin" element={!userData?<SignIn/>: <Navigate to={"/"}/>} />
          <Route path='/forgot-password' element={ !userData?<ForgotPassword/>:<Navigate to={"/"}/>} />
        </Routes>
      </div>
  );
}

export default App;
