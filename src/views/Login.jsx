import { useEffect } from "react";
import keycloak from "../keycloak"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

//check if user exists
//if not register the user
//set an initial state for user after login or register



const Login = () =>{
    
      const handleLogin = async () => {
        keycloak.login()
      }

      const navigate = useNavigate()
      const [username, setUsername] = useState('')

      // useEffect((
      //   () => {
      //     if (keycloak.authenticated) 
      //       setUsername(keycloak.tokenParsed.preffered_username)
      //       navigate('/programs')
      //   }
      // ),[username])


      const handleRegister = () => {
        keycloak.register()
      }

      const handleToken = () => {
        console.log(keycloak.tokenParsed);
        console.log(keycloak.token)
      }

    
      return (
        <div className="login-btn-grp">
          <h1>Welcome!</h1>
          <button onClick={handleLogin}  className="login-btn">Login</button>
          <button onClick={handleRegister} className="login-btn">Register</button>
          <button onClick={handleToken} className="login-btn">Test</button>
        </div>
      )
    }

export default Login