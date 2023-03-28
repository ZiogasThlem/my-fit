import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom"
import NavigateTo from "../../utils/NavigateTo"
import ProgramForm from "./ProgramForm";

const ProgramAdd = ()=>{
    const [displayForm, setDisplayForm] = useState(false);
    const navigate = useNavigate();
    function handleClick(){
        // navigate("/ProgramForm")
       setDisplayForm(true)
    }
    return (
        <>
        <button onClick={handleClick}>Add a program</button>
        {displayForm && <ProgramForm forAdding={true}></ProgramForm>}
        </>
    )
}

export default ProgramAdd