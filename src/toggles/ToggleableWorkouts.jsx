import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import WorkoutItem from "../forms/workout/WorkoutItem"
import { fetchWorkouts, selectWorkoutsByIds } from "../reduxParts/reducers/workoutSlice";

const ToggleableWorkouts = ({workoutIds, toggle, index, workoutsPerProgram})=>{
    const [ids,setIds]=useState();
    const dispatch = useDispatch();
    const [toggleWorkouts,setToggleWorkouts]=useState(false)
    const selectedWorkouts=useSelector(state=>selectWorkoutsByIds (state.workout.workouts))
    //     {
    //         console.log(state.workout.selectedWorkouts);
    //      selectWorkoutsByIds (state.workout, workoutIds);
    //     }
    //     );
    const [fetchedWorkoutsLoaded, setFetchedWorkoutsLoaded]=useState(false);
    const [workouts,setWorkouts]=useState();
    const [workoutsLoaded,setWorkoutsLoaded]=useState(false)
    
    // useEffect(()=>{
    //     dispatch(fetchWorkouts())
    // },[dispatch])
    // useEffect(()=>{
    //     if(status==='succeeded'){
    //         setFetchedWorkoutsLoaded(true)
    //     }
    // },[status])
    // useEffect(()=>{
    //     if(workoutIds){
    //         setIds([...workoutIds])
    //     }
    //     if(fetchedWorkoutsLoaded && ids){
    //         dispatch(selectWorkoutsByIds(ids))        
    //     }
    // },[fetchedWorkoutsLoaded,workoutIds,dispatch,ids])
    // useEffect(()=>{
    //     if(selectedWorkouts){
    //         setWorkouts(selectedWorkouts)
    //     }
    //     if(workouts){
    //         setWorkoutsLoaded(true)
    //     }
    // },[selectedWorkouts,workouts])
    
    // useEffect(()=>{
    //     if(workoutIds){
    //         console.log(workoutIds);
    //         dispatch((selectWorkoutsByIds(workoutIds)))
    //     }
    // },[workoutIds,dispatch])

    // useEffect(()=>{
    //     if(selectedWorkouts){
    //         console.log(workouts);
    //         setWorkouts(selectedWorkouts)
    //     }
    // },[selectedWorkouts])
    // useEffect(()=>{
    //     if(selectedWorkouts){
    //         setWorkoutsLoaded(true)
    //         // console.log(workoutsPerProgram[index]);
    //     }

    // },[])
    // useEffect(()=>{
    //     if(selectedWorkouts){
    //         setWorkoutsLoaded(true)
    //     }
    // },[workoutsLoaded,selectedWorkouts])
    
    const date=String(new Date())
    if(!workoutsLoaded){
        return <tr><td>Loading...</td></tr>
    }
    return(
        <>
        {/* <tr>
        <td>
        {!toggleWorkouts&&    <button onClick={toggleWorkoutsHandler}>Show Workouts</button>    }
        {toggleWorkouts   && <button onClick={unToogleWorkoutsHandler}>Hide Workouts</button>    }
        </td>
        </tr> */}
        
       {toggle[index]&& workoutsLoaded &&
                            <>
                                
                                    <tr>
                                        <td colSpan={3}>Workouts</td>
                                    </tr>
                                    <tr>
                                        <td>Name</td>
                                        <td>Type</td>
                                        <td>Total exercises</td>
                                    </tr>
                                
                                    {selectedWorkouts && selectedWorkouts.map((workout,index)=>{
                                        <tr key={`${date}_${index}_${index}`}>
                                            <WorkoutItem workout={workout}/>
                                        </tr>
                                        }
                                    )}
                                
                            </>
        
        }
        </>
    )
}
export default ToggleableWorkouts