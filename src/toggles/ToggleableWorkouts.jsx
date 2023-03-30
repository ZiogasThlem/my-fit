import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import WorkoutItem from "../forms/workout/WorkoutItem"
import { fetchWorkouts, selectWorkoutsByIds } from "../reduxParts/reducers/workoutSlice";

const ToggleableWorkouts = ({workoutIds, programIndex, toggle})=>{
    const [ids,setIds]=useState();
    const dispatch = useDispatch();
    const [toggleWorkouts,setToggleWorkouts]=useState(false)
    const{workouts:fetchedWorkouts, status, selectedWorkouts:selectedWorkouts}=useSelector(state=>state.workout);
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
    
    const date=String(new Date())
    if(!workoutsLoaded && toggle[programIndex]){
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
        
       {toggle[programIndex]&& workoutsLoaded&&
                            <>
                                
                                    <tr>
                                        <td colSpan={3}>Workouts</td>
                                    </tr>
                                    <tr>
                                        <td>Name</td>
                                        <td>Type</td>
                                        <td>Total exercises</td>
                                    </tr>
                                
                                    {workouts.map((workout,index)=>{
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