import keycloak from "../../keycloak"

const LoginButton = ()=>{

    return (
        
        <button onClick={async () => {
                keycloak.login()}}
        >Login</button>
        
    )
}

export default LoginButton 