import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router"
import ProgramItem from "../forms/program/ProgramItem";
import WorkoutItem from "../forms/workout/WorkoutItem";
import { selectGoalById } from "../reduxParts/reducers/goalSlice";
import { selectProgramsByIds } from "../reduxParts/reducers/programSlice";
import { selectWorkoutsByIds } from "../reduxParts/reducers/workoutSlice";
import ToggleableWorkouts from "../toggles/ToggleableWorkouts";


const Programs = ()=>{
    const {id} =useParams();
    const dispatch=useDispatch();
    const {goal:goalSelected} = useSelector(state=>state.goal)
    const {selectedPrograms} = useSelector(state=>
        {
            // console.log(state.program);
            return state.program}
        )
    const {selectedWorkouts}=useSelector((state)=>
    {
        // console.log(state.workout);
        return state.workout
    });
    const [goal,setGoal] =useState();
    const [goalLoaded,setGoalLoaded] = useState(false);
    const [selectedProgramsLoaded,setSelectedProgramsLoaded] = useState(false);
    const [programsLoaded,setProgramsLoaded]=useState(false)
    const [programs,setPrograms]=useState();
    const [programsIsArray,setProgramsIsArray]=useState(false);
    const [workouts,setWorkouts]=useState()
    const [workoutsLoaded,setWorkoutsLoaded] = useState(false);
    const [workoutsToShow,setWorkoutsToShow]=useState(false);
    const [showWorkouts,setShowWorkouts] = useState([])
    const [programWorkout,setProgramWorkout]=useState();
    useEffect(()=>{
        dispatch(selectGoalById(id))
    },[dispatch])
    useEffect(()=>{
        if(goalSelected){
            setGoal(goalSelected);
        }
        if(goal!=undefined){
            setGoalLoaded(true)
        }
        if(goalLoaded){
            dispatch(selectProgramsByIds(goal.program));
            // dispatch(selectProgramsByIds(id));
        }
    },[goal,goalSelected,goalLoaded])
    useEffect(()=>{
        if(selectedPrograms){
            setSelectedProgramsLoaded(true);
        }
        if(selectedProgramsLoaded){
            setPrograms(selectedPrograms);
            
        }
    },[selectedPrograms, selectedProgramsLoaded])
    useEffect(()=>{
        if(programs){
            setProgramsLoaded(true);
        }
    },[programs,programsLoaded])
    useEffect(()=>{
        if(workoutsLoaded){
            setWorkouts(selectedWorkouts);
            setWorkoutsToShow(true);
        }
    },[selectedWorkouts,workoutsLoaded])
    useEffect(()=>{

    },[])
    // useEffect(()=>{
    //     if(!showWorkouts){
    //         setWorkouts();
    //     }
    // },[showWorkouts])
    const handleShowWorkouts=(workoutIds,index)=>{    
        dispatch(selectWorkoutsByIds(workoutIds));
        setWorkoutsLoaded(true);
        if(index>=showWorkouts.length){
            setShowWorkouts((prevShowWorkouts)=>{
                const updatedShowWorkouts = [...prevShowWorkouts];
                updatedShowWorkouts.push(true);
                return updatedShowWorkouts;
            })
        }else{
            setShowWorkouts([true]);
        }
        console.log(showWorkouts);
    }
    const handleHideWorkouts=(index)=>{
       setWorkoutsToShow(false)
        console.log('mpika');
        setShowWorkouts((prevShowWorkouts) => {
            let updatedShowWorkouts = Array.isArray(prevShowWorkouts)?[...prevShowWorkouts]:prevShowWorkouts
            Array.isArray(prevShowWorkouts)?updatedShowWorkouts[index]=false:updatedShowWorkouts=false
            return updatedShowWorkouts;
        });
        dispatch(selectWorkoutsByIds())
    }
    const date=String(new Date());
    // WE MUST RETURN THE FALSE BOOLEANS TO WORK THIS
    if(!programsLoaded){
        return (<div>Loading programs...</div>)
    }
    // if(!workoutsToShow){
    //     return
    // }
    return(
        <>
        {
            programsLoaded&& 
            <table>
                <thead>
                    <tr>
                        <th colSpan={3}>
                            Programs
                        </th>
                    </tr>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Total Workouts</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                
                <tbody>
                    {programsLoaded&& programs
                        .map((program,index,programs)=>{
                                            return (
                                                <React.Fragment key={`${date}_${index}`}>
                                                        <tr >
                                                            <ProgramItem program={program} key={`${date}_${index}`}/>
                                                            <td>{program.workout.length}</td>
                                                            {!showWorkouts[index]?         <td><button key={`${date}_${index}_${index}`} onClickCapture={()=>handleShowWorkouts(program.workout,index)}>Show Workouts</button></td> :
                                                                <td><button key={`${date}_${index}_button`} onClickCapture={()=>handleHideWorkouts(index)}>Hide Workouts</button></td>}
                                                        </tr>
                                                        
                                                                <ToggleableWorkouts  key={`${date}_${index}_toggle`} workoutIds={program.workout} programIndex={index} toggle={showWorkouts}/>
                                                </React.Fragment>  
                                                    
                                                
                                                    )
                                }
                            )
                    }
                    
                            
                            
                        </tbody>
                    
               
            </table>        
        }
        </>
    )
}

export default Programs