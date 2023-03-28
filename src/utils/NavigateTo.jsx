import { Navigate } from "react-router-dom"

const NavigateTo = ({destination})=>{
    return(
        <Navigate to={destination}></Navigate>
    )
}

export default NavigateTo