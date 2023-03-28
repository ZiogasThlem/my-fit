import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router"
import { selectExercisesByIds } from "../reduxParts/reducers/exerciseSlice";
import { selectGoalById } from "../reduxParts/reducers/goalSlice";
import { selectProgramsByIds } from "../reduxParts/reducers/programSlice";
import { selectWorkoutsByIds } from "../reduxParts/reducers/workoutSlice";

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
    const programsSelected = useSelector((state)=>{
        return(
            state.program.selectedPrograms    
        )
    })
    const workoutsSelected = useSelector((state)=>{
        return(
            state.workout.selectedWorkouts    
        )
    })
    const exercisesSelected = useSelector((state)=>{
        console.log(state.exercise);
        return(
            
            state.exercise.selectedExercises    
        )
    })
    const [goalLoaded,setGoalLoaded]=useState(false);
    const [programsLoaded,setProgramsLoaded]=useState(false);
    const [workoutsLoaded,setworkoutsLoaded]=useState(false);
    const [exercisesLoaded,setExercisesLoaded]=useState(false);
    const [programs,setPrograms]=useState();
    const [workouts,setWorkouts]=useState();
    const [exercises,setExercises]=useState();
    const [exIdPool,setExIdPool]=useState([])
    const [wIdPool,setwIdPool]=useState([])
    const [pIdPool,setpIdPool]=useState([])
    
    
    // const [exercisesLoaded,setExercisesLoaded]=useState(false);
    useEffect(()=>{
        dispatch(selectGoalById(id));
    },[dispatch])
    
   
    
    
    useEffect(()=>{
        if(selectedGoal){
            
            setGoal(selectedGoal);
        }
    },[selectedGoal])
    useEffect(()=>{
        if(goal){
            setGoalLoaded(true)
        }
    },[goal])
    useEffect(()=>{
        if(goalLoaded){
            dispatch(selectProgramsByIds(goal.program))

        }
    },[goalLoaded])
    useEffect(()=>{
        if(programsSelected){
            
            setPrograms(programsSelected)
        }
        if(programs){
            
            setProgramsLoaded(true)
        }
    },[programsSelected, programsLoaded])
    useEffect(()=>{
        if(programsLoaded){
            programs.forEach(program => {
                
                setwIdPool((prevIds)=>[...new Set(prevIds),...program.workout])
            });
           
        }
        
    },[programsLoaded])
    useEffect(()=>{
        if(wIdPool){
            
            dispatch(selectWorkoutsByIds(wIdPool))
            console.log('pls not loop');
        }
        
    },[dispatch,wIdPool])
    useEffect(()=>{
        console.log(workoutsSelected);
        if(workoutsSelected){
            setWorkouts(workoutsSelected)
            console.log(workoutsSelected);
        }
    },[workoutsSelected])
    useEffect(()=>{
        if(workouts){
            setworkoutsLoaded(true)
        }
    },[workouts])
    useEffect(()=>{
        if(workoutsLoaded){
            workouts.forEach(workout=>{
                setExIdPool((prevIds)=>[...new Set(prevIds),...workout.exercise])
                console.log(exIdPool);
            })
           
        }
    },[workoutsLoaded,workouts])
    useEffect(()=>{
        if(exIdPool.length>1){
                setExIdPool((prevIds)=>[...new Set(prevIds)])
                console.log(exIdPool);
                dispatch(selectExercisesByIds(exIdPool))
        }
    },[dispatch])
    useEffect(()=>{
        if(exercisesSelected){
            console.log(exercisesSelected);
            setExercises(exercisesSelected)
        }
    },[exercisesSelected])
    useEffect(()=>{
        if(exercises){
            setExercisesLoaded(true)
        }
    },[exercises])
    // useEffect(()=>{
    //     if(workoutsSelected){
    //         setWorkouts(workoutsSelected)
    //         console.log('setting workouts');
    //     }
    // },[workoutsLoaded])
    if(!exercisesLoaded){
        return <div>Loading exercises...</div>
    }
    const date = String(new Date())
    return(
        <>

        </>
    )
}
export default Exercises