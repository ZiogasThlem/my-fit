import React, { useState } from 'react'
import LoginForm from '../components/LoginComponents/LoginForm'
import LoginHeader from '../components/LoginComponents/LoginHeader'
import keycloak from '../keycloak'

const Login = () => {


  const handleClick = () => {
    console.log(keycloak.token)
    console.log(keycloak.tokenParsed)
    console.log(keycloak.authenticated)
  }
  
  return (
    <>
      <LoginHeader/>
      <LoginForm/>
      <button onClick={handleClick}>test</button>
    </>
  )
}

export default Login