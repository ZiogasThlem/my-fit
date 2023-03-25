
import ProgramChoice from "../components/program/ProgramChoice";
import { useEffect, useState } from "react";
import ExerciseForm from "../components/exercise/ExerciseForm";
import ProgramForm from "../components/program/ProgramForm";
import WorkoutForm from "../components/workout/WorkoutForm";
import { useDispatch, useSelector } from "react-redux";
import { getAllExercisesAsync } from "../ReduxParts/exercise/exerciseSlice";




const Profile = () =>{
    const dispatch = useDispatch();
    // const workouts = useSelector(state=>{    
    //     return state.workout
    // });
    // const exercises = useSelector(state=>state.exercise);
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

    // const programs = [{
    //     "name":"name value",
    //     "type":"some workout type",
    //     "completed":"workout completed boolean",
    //     "exerciseList":[]
    // },{
    //     "name":"name value2",
    //     "type":"some workout type2",
    //     "completed":"workout completed boolean2",
    //     "exerciseList":[]
    // }]
    const programs = [1,2,3]
    // let formProp = formProps.exerciseAdd
    
    const [displayForm, setDisplayForm] = useState(formProps);

    //set all the other values to false so to avoid rendering simultaneously different components
    const handleContributorClick = (displayForm,formProp)=>{
        for (let formProperty in displayForm){
            if(formProperty===formProp)
                continue
            displayForm[formProperty] = false;
        }
        
        displayForm[formProp] = !displayForm[formProp];
        
        
        // dispatch(getAllExercisesAsync());
        return {...displayForm}
    }

    // useEffect(()=>{
    //     dispatch(getAllExercisesAsync());
    // },[dispatch]);

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
        {/* {displayForm.programEdit && <ProgramForm forAdding={false}></ProgramForm>*/}
        {displayForm.workoutEdit && <WorkoutForm forAdding={false}></WorkoutForm>} 
        {displayForm.exerciseEdit && <ExerciseForm forAdding={false} isContributor={isContributor}></ExerciseForm>}
        {/* {displayForm.programAdd && <ProgramForm forAdding={true}></ProgramForm>} */}
        {displayForm.workoutAdd && <WorkoutForm forAdding={true}></WorkoutForm>}
        {displayForm.exerciseAdd && <ExerciseForm forAdding={true} isContributor={isContributor}></ExerciseForm>}
        </>
        }

        
        {!isContributor && <ProgramChoice programs={programs}/>}
        </ul>
        
        </>
    )
}

export default Profile