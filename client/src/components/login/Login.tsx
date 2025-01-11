import React from 'react';
import AuthForm from '../forms/AuthForm';

import {login} from '../../api/authApi'

const Login = () => {
  const onSubmit = (data: { username: string; password: string }) => {
    console.log("Login Data:", data);
    login(data)
  };

  return <AuthForm onSubmit={onSubmit} formType="login" />;
};

export default Login;