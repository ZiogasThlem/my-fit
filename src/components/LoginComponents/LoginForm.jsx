import keycloak from "../../keycloak"

const LoginForm = () => {

  const handleLogin = () => keycloak.login()

  return (
        <button onClick={handleLogin}>Login</button>
  )
}

export default LoginForm