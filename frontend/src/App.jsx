import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from './utils/Loading.jsx';
import Navbar from './components/ui/navbar/Navbar.jsx';
import { Home } from './components/ui/pages/Home.jsx';
import { SignUp } from './pages/auth/SignUp.jsx';
import { SignIn } from './pages/auth/SignIn.jsx';
import { ForgotPassword } from './pages/auth/Forgot-password.jsx';

export const serverUrl= "http://localhost:5000"


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
      <div className='App'>
        <Navbar />  
        <Routes>
          <Route path='/' element={<Home />} />  
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path='/forgot-password' element={<ForgotPassword/>} />
        </Routes>
      </div>
  );
}

export default App;
