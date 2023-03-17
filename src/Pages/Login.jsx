import React, { useState } from 'react'
import LoginForm from '../components/LoginComponents/LoginForm'
import LoginHeader from '../components/LoginComponents/LoginHeader'
import keycloak from '../keycloak'

const Login = () => {


  const handleTest = () => {
    console.log(keycloak.token)
    console.log(keycloak.tokenParsed)
    console.log(keycloak.authenticated)
  }
  
  return (
    <>
      <LoginHeader/>
      <LoginForm/>
      <button onClick={handleTest}>test</button>
    </>
  )
}

export default Login