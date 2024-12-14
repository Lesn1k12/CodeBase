import React from 'react'
import AuthForm from '../forms/AuthForm'

const Login = () => {

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <AuthForm onSubmit={onSubmit} formType={"login"}/>
  )
}

export default Login