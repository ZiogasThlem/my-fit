import { useState } from "react";
import ExerciseForm from "./ExerciseForm";

const ExerciseAdd=()=>{
    const [displayForm, setDisplayForm] = useState(false);
    
    function handleClick(){
        // navigate("/ProgramForm")
        displayForm==true?setDisplayForm(false):setDisplayForm(true);
    //    setDisplayForm(true)
    }

    return (
        <>
        <button onClick={handleClick}>Add an exercise</button>
        {displayForm&& <ExerciseForm forAdding={true}></ExerciseForm>}
        </>
    )
}
export default ExerciseAdd