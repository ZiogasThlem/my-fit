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
        console.log(keycloak.token)
      }

    
      return (
        <>
      
        
        <div className="bg" style={{ backgroundImage: `url("https://static.vecteezy.com/system/resources/thumbnails/000/595/983/small/04012019-25.jpg")` }}>
          <section>

        <h1>Welcome to MeFit</h1>
        <h3>The best place for your daily exerccise!</h3>
        
          <button className="login" onClick={handleLogin}>Login</button>
          <button className="register" onClick={handleRegister}>Register</button>
          <button onClick={handleToken}>Test</button>
          </section>
          </div>
        
        </>
      )
    }

export default Login