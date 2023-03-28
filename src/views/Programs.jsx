import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router"
import ProgramItem from "../forms/program/ProgramItem";
import WorkoutItem from "../forms/workout/WorkoutItem";
import { selectGoalById } from "../reduxParts/reducers/goalSlice";
import { selectProgramsByIds } from "../reduxParts/reducers/programSlice";
import { selectWorkoutsByIds } from "../reduxParts/reducers/workoutSlice";


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
    
    if(!programsLoaded){
        return (<div>Loading programs...</div>)
    }
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

                    { programs.map((program,index)=>{
                            return (
                            
                                    <tr key={`${date}_${index}`}>
                                        <ProgramItem program={program}/>
                                        <td>{program.workout.length}</td>
                                        {!showWorkouts[index]?         <td><button onClickCapture={()=>handleShowWorkouts(program.workout,index)}>Show workouts</button></td> :
                                            <td><button onClickCapture={()=>handleHideWorkouts(index)}>Hide workouts</button></td>}
                                    </tr>
                                    )
                                    }
                                    )
                    }
                     {workoutsToShow&&       <tr>
                            <table>
                                <thead>
                                    <tr>
                                        <th colSpan={3}>Workouts</th>
                                    </tr>
                                    <tr>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Total exercises</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {workoutsToShow && workouts.map((workout,index)=>{
                                        <tr key={`${date}_${index}_${index}`}>
                                            <WorkoutItem workout={workout}/>
                                        </tr>
                                        }
                                    )}
                                </tbody>
                            </table>
                            
                            </tr>
}
                            
                            
                        
                    
                </tbody>
            </table>        
        }
        </>
    )
}

export default Programs