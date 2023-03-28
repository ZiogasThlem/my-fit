import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router";
import { removeObjectsById } from "../helpers/removeObjectsByid";
import { selectGoalById } from "../reduxParts/reducers/goalSlice";
import { selectProgramsByIds } from "../reduxParts/reducers/programSlice";
import { selectWorkoutsByIds } from "../reduxParts/reducers/workoutSlice";
import {removeDuplicateObjects} from "../helpers/removeDuplicateObjects";
import WorkoutItem from "../forms/workout/WorkoutItem";

const Workouts = () =>{
    const dispatch= useDispatch();
    //validate the id goal(select the profile id, then select the goal id, we suupose that the goal id is 1)
    const goalId=1;
    const {id}=useParams();
    const [isUsersProfile,setIsUsersProfile]=useState()
    const goalSelected=useSelector((state)=>state.goal.goal)
    const programsSelected = useSelector((state)=>state.program.selectedPrograms);
    const statusPrograms = useSelector((state)=>state.program.statusSelectedPrograms);
    const workoutsSelected = useSelector((state)=>{
        // console.log('state of workouts',state.workout);
        return state.workout.selectedWorkouts});
    const [goalLoaded,setGoalLoaded] = useState(false)
    const [goal,setGoal]=useState();
    const [programs,setPrograms]=useState([]);
    const [programsLoaded,setProgramsLoaded]=useState(false);
    const [workoutsLoaded,setWorkoutsLoaded]=useState(false);
    const [workoutIdsCollectionFinished,setWorkoutIdsCollectionFinished]=useState();
    const [workoutIds,setWorkoutIds]=useState([])
    const [workouts,setWorkouts]=useState([])
    const [workoutsToShow,setWorkoutsToShow]=useState(false)
    console.log(workoutsSelected);
    //select programs
    //select the workouts in registerd programs
    useEffect(()=>{
        if(goalSelected){
            setGoal(goalSelected);
        }
    },[goalSelected])
    
    useEffect(()=>{
        if(goalSelected){
            dispatch(selectProgramsByIds(goalSelected.program))
            setGoalLoaded(true)
        }
       
    },[dispatch])
    useEffect(()=>{
        dispatch(selectProgramsByIds(goalSelected.program))
    },[dispatch])
    useEffect(()=>{
        if(statusPrograms==='succeeded'){
            setPrograms([...programsSelected])
            setProgramsLoaded(true)
        }
    },[statusPrograms])
    useEffect(()=>{
        if(programsLoaded){
            
            programs.forEach(
                (program,index)=>{
                    console.log(program.workout);
                    setWorkoutIds((prevIds)=> [...new Set(prevIds),...program.workout])
                    console.log(workoutIds);
                }
            )
           
        }

    },[programsLoaded,programs])
    useEffect(()=>{
        if(workoutIds.length>1)
        {
            console.log('workout ids',workoutIds);
            setWorkoutIdsCollectionFinished(true)
            dispatch(selectWorkoutsByIds(workoutIds))
        }
    },[workoutIds,dispatch])
    useEffect(()=>{
        
        if(workoutsSelected){
            setWorkouts([...workoutsSelected])
            setWorkoutsLoaded(true)
            console.log(workoutsSelected);
            console.log(workouts);
        }
    },[workoutsSelected])
    useEffect(()=>{
        if(workouts.length>1){
            setWorkoutsToShow(true)
        }
    },[workouts])
    
    useEffect(()=>{
       
        if(goal){
            goal.id==id?setIsUsersProfile(true):setIsUsersProfile(false)
        }
    },[goal])
    
   




    
    if(!workoutsToShow){
        return <div>Loading...</div>
    }
    if(!isUsersProfile){
        return <div>Error, these are not your registered workouts</div>
    }
    const date=String(new Date());
    return(
        <>
        <table>
            <thead>
                <tr><th colSpan={3}>My workouts</th></tr>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Total Exercises</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
        {workoutsToShow &&
            workouts.map((workout,index)=>{
            return    <React.Fragment key={`${date}_frag_${index}`}>
                    <tr key={`${date}_${index}_tr`}>
                        <WorkoutItem workout={workout}/>
                        <td><button>Show exercises</button></td>
                        <td><button>hide Exercises</button></td>
                    </tr>
                    
                    <tr></tr>
                </React.Fragment>
            }

            )
        }
        </tbody>
        </table>
        </>
    )
}

export default Workouts