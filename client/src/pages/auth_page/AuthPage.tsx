import React, { useState } from 'react';
import Login from '../../components/login/Login';
import Register from '../../components/register/Register';
import './authPage.css';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-container">
      <div className="auth-card">
        {isLogin ? <Login /> : <Register />}
        <p>
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            className="auth-toggle"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign up now" : "Sign in now"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
