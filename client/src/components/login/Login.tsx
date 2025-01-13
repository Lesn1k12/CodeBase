import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../forms/AuthForm';

import {login} from '../../api/authApi'

const Login = () => {
  const navigate = useNavigate();

  const onSubmit = async (data: { username: string; password: string }) => {
    console.log("Login Data:", data);
    const response = await login(data);
    if (response) {
      navigate('/dashboard');
    }
  };

  return <AuthForm onSubmit={onSubmit} formType="login" />;
};

export default Login;