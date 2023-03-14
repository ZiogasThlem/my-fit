import React from 'react'
import LoginForm from '../components/LoginComponents/LoginForm'
import LoginHeader from '../components/LoginComponents/LoginHeader'
import keycloak from '../keycloak'

const Login = () => {
  return (
    <>
      <LoginHeader/>
      <LoginForm/>
      <button onClick={()=>{
        console.log(keycloak.token)
        console.log(keycloak.tokenParsed)
        console.log(keycloak.authenticated)
        }}>test</button>
    </>
  )
}

export default Login