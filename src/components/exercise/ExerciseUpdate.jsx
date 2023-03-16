import { useState } from "react";
import ExerciseForm from "./ExerciseForm";

const ExerciseUpdate = ()=>{
    const [displayForm, setDisplayForm] = useState(false);
    
    function handleClick(){
        // navigate("/ProgramForm")
        displayForm==true?setDisplayForm(false):setDisplayForm(true);
    }
    return(
        <>
        <button onClick={handleClick}>Edit exercise</button>
        {displayForm&& <ExerciseForm forAdding={false}></ExerciseForm>}
        </>
    )
}
export default ExerciseUpdate