import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router"
import { selectGoalById } from "../reduxParts/reducers/goalSlice";

// programs,workouts
//programs have workout ids, make an array of ids for each program
//then pass the array ids to workouts
const Exercises = ()=>{
    const {id} = useParams();
    const dispatch = useDispatch();
    const {goal:selectedGoal}=useSelector(state=>
        {
            console.log(state.goal);
            return state.goal
        }
        )
    const [goal,setGoal]=useState();
    const [goalLoaded,setGoalLoaded]=useState(false);
    const [registeredExercises,setRegisteredExercises]=useState();
    const [allObjectsLoaded,setAllObjectsLoaded]=useState(false);
    useEffect(()=>{
        dispatch(selectGoalById(id));
    },[dispatch])
    useEffect(()=>{
        if(selectedGoal){
            setGoalLoaded(true)
        }
        if(goalLoaded){
            setGoal(selectedGoal);
        }
    },[goalLoaded,goal])
    
    return(
        <>

        </>
    )
}
export default Exercises