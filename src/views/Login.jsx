import keycloak from "../keycloak"
//check if user exists
//if not register the user
//set an initial state for user after login or register



const Login = () =>{
    
      const handleLogin = async () => {
        keycloak.login()
      }
      const handleRegister = () => {
        keycloak.register()
      }

      const handleToken = () => {
        console.log(keycloak.tokenParsed);
      }

    
      return (
        <>
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleRegister}>Register</button>
          <button onClick={handleToken}>Token</button>
        </>
      )
    }

export default Login