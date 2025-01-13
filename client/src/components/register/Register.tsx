import React from 'react';
import AuthForm from '../forms/AuthForm';

import {register} from '../../api/authApi'

const Register = () => {
  const onSubmit = (data: { username: string; email: string; password: string }) => {
    console.log("Register Data:", data);
    data["role"] = "user";
    register(data)
  };

  return <AuthForm onSubmit={onSubmit} formType="register" />;
};

export default Register;