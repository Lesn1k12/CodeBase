import React from 'react'
import AuthForm from '../forms/AuthForm'

const Register = () => {

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <AuthForm onSubmit={onSubmit} formType={"register"}/>
  )
}

export default Register