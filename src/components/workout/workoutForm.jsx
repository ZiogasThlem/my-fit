import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllExercisesAsync } from "../../ReduxParts/exercise/exerciseSlice";
import {getAllWorkoutsAsync} from '../../ReduxParts/workout/workoutSlice';
import ComponentCRUD from "../contributor/ComponentCRUD";

const WorkoutForm = ({forAdding, forViewing})=>{
    const workoutNameConfig = {
        required: true,
        minLength:1
    }
    const dispatch = useDispatch();
    const [type,setType]=useState('workout');
    const workouts = useSelector(state=>{    
        return state.workout
    });
    const exercises = useSelector(state=>state.exercise);
    // const [workout,setWorkout]=useState(workouts[0]);
    useEffect(()=>{
        if(!forAdding){
            console.log('get all workouts');
            dispatch(getAllWorkoutsAsync());
            // dispatch(getAllExercisesAsync());
            setLoaded(true);
        }
    },[dispatch]);
    const [loaded,setLoaded] = useState(false);
    
    console.log(workouts);
    const workout = workouts[0]===undefined?workouts:workouts[0];

    const workoutStructure={
        'workoutName':['Name','name','text'],
        'workoutType':['Type','type','text'],
        'workoutComplete':['Completed','complete', 'text'],
        'workoutExercise':['Exercises','exercise', 'array']
    }

    return(
        <>
            {forAdding &&<>
            {/* <ExcerciseDisplay forAdding={forAdding} exercise={exercise}/> */}
            <ComponentCRUD forAdding={forAdding} item={workout} itemType={type} itemStructure={workoutStructure} itemChildType={'exercise'}/>
        </>}
        {!forAdding && loaded &&<>
            <h1>Edit workout</h1>
            {/* {exercises.map((exercise,index)=>{return <ExcerciseDisplay key={`exercise${index}`} exercise={exercise} forAdding={forAdding}/>})} */}
            {workouts.map((workout,index)=>{return <ComponentCRUD key={`workout${index}`} item={workout} forAdding={forAdding} itemType={type} itemStructure={workoutStructure}/>})}
        </>}
        </>
    )
}
export default WorkoutForm