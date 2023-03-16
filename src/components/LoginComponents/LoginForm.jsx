import keycloak from "../../keycloak"

const LoginForm = () => {

  const handleLogin = async () => {
    keycloak.login()
  }
  const handleRegister = () => {
    keycloak.register()
  }

  return (
    <>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleRegister}>Register</button>
    </>
  )
}

export default LoginForm