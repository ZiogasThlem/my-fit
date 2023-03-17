import ExerciseUpdate from "../components/exercise/ExerciseUpdate";
import WorkoutUpdate from "../components/workout/WorkoutUpdate";
import ProgramUpdate from "../components/program/ProgramUpdate";
import ProgramAdd from "../components/program/ProgramAdd";
import WorkoutAdd from "../components/workout/WorkoutAdd";
import ExerciseAdd from "../components/exercise/ExerciseAdd";
import WorkoutList from "../components/workout/WorkoutList";
import WorkoutItem from "../components/workout/WorkoutItem";
import ProgramList from "../components/program/ProgramList";
import { useEffect, useState } from "react";
import ExerciseForm from "../components/exercise/ExerciseForm";
import ProgramForm from "../components/program/ProgramForm";
import WorkoutForm from "../components/workout/WorkoutForm";

const Profile = () =>{
    const contributor = true;
    const isContributor = true;
    const isAdmin = true;
    // const formProps = {
    //     programEdit: false,
    //     workoutEdit : false,
    //     exerciseEdit: false,
    //     programAdd: false,
    //     workoutAdd: false,
    //     exerciseAdd: false
    // }
    const formProps = {
        "programEdit": false,
        "workoutEdit" : false,
        "exerciseEdit": false,
        "programAdd": false,
        "workoutAdd": false,
        "exerciseAdd": false
    }
    // let formProp = formProps.exerciseAdd
    
    const [displayForm, setDisplayForm] = useState(formProps);

    //set all the other values to false so to avoid rendering simultaneously different components
    const handleContributorClick = (displayForm,formProp)=>{
        for (let formProperty in displayForm){
            displayForm[formProperty] = false;
        }
        displayForm[formProp] = !displayForm[formProp];
        return {...displayForm}
    }

    return(
        <>
        <h1>Profile</h1>
        <ul>

        {
        isContributor && 
        <>
        {/* <WorkoutUpdate></WorkoutUpdate>
        <ProgramUpdate></ProgramUpdate>
        <ExerciseUpdate></ExerciseUpdate>
        <ProgramAdd></ProgramAdd>
        <WorkoutAdd></WorkoutAdd>
        <ExerciseAdd></ExerciseAdd> */}
        
        
        <button onClick={()=>setDisplayForm(handleContributorClick(displayForm,"programEdit"))}>Edit program</button>
        <button onClick={()=>setDisplayForm(handleContributorClick(displayForm,"workoutEdit"))}>Edit workout</button>
        <button onClick={()=>setDisplayForm(handleContributorClick(displayForm,"exerciseEdit"))}>Edit exercise</button>
        <button onClick={()=>setDisplayForm(handleContributorClick(displayForm,"programAdd"))}>Add program</button>
        <button onClick={()=>setDisplayForm(handleContributorClick(displayForm,"workoutAdd"))}>Add workout</button>
        <button onClick={()=>setDisplayForm(handleContributorClick(displayForm,"exerciseAdd"))}>Add exercise</button>
        {/* <button onClick={handleContributorClick(displayForm,"programAdd")}>Add a program</button> */}
        {displayForm.programEdit && <ProgramForm forAdding={false}></ProgramForm>}
        {displayForm.workoutEdit && <WorkoutForm forAdding={false}></WorkoutForm>}
        {displayForm.exerciseEdit && <ExerciseForm forAdding={false}></ExerciseForm>}
        {displayForm.programAdd && <ProgramForm forAdding={true}></ProgramForm>}
        {displayForm.workoutAdd && <WorkoutForm forAdding={true}></WorkoutForm>}
        {displayForm.exerciseAdd && <ExerciseForm forAdding={true}></ExerciseForm>}
        </>
        }
        {!isContributor && <ProgramList/>}
        </ul>
        
        </>
    )
}

export default Profile