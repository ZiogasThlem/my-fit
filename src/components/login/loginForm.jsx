import { useNavigate } from "react-router-dom"

const LoginForm = ()=>{
const navigate = useNavigate()

useEffect(()=>{
    if(user!==null){
        navigate('/profile')
    }
    // console.log('User has changed', user)
    //if user exists then redirect to profile
},[user, navigate]) // Empty dependencies means run only once


return(
    <div>
        <form>
            
        </form>
    </div>

)

}
export default LoginForm