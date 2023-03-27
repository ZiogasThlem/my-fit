import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router"
import { removeElementFromArray } from "../../helpers/removeElementFromArray";
import { addProgram } from "../../reduxParts/reducers/programSlice";
import WorkoutItem from "../workout/WorkoutItem";

const ProgramFormAdd = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showWorkouts, setShowWorkouts] = useState();
    const [workoutsToSelect,setWorkoutsToSelect] = useState();
    const [workoutIds,setWorkoutIds]=useState();
    const [checkedItems,setCheckedItems] = useState({});
    const [formData,setFormData] = useState({name:'', category:'', workout:[]})
    const {workouts} = useSelector((state)=>{
        return state.workout;
    })
    useEffect(()=>{
        if(workoutsToSelect!=workouts && workoutsToSelect==undefined){
            setWorkoutsToSelect([...workouts])
        }
    },[workoutsToSelect,workouts])
    useEffect(()=>{
        if(workoutsToSelect!=undefined){
            setShowWorkouts(true)
        }else{
            setShowWorkouts(false)
        }
    },[workoutsToSelect,showWorkouts])

    const handleSubmit = (event)=>{
        event.preventDefault();
        const itemPayload = {name:formData.name, category:formData.category, workout:workoutIds}
        dispatch(addProgram(itemPayload))
    }
    const handleBack = ()=>{
        navigate('/programs');
    }

    const handleAddWorkout = (event,id)=>{
        const isChecked = event.target.checked;
        setCheckedItems(prevState => ({
            ...prevState,
            [event.target.name]: isChecked
        }));
        if (isChecked){
            if(workoutIds==undefined){
                setWorkoutIds([id])
                return
            }
            else if(!workoutIds.includes(id)){
                setWorkoutIds([...workoutIds, id]);
            }
        } else {
            setWorkoutIds(removeElementFromArray(workoutIds, id))
        }
        console.log(workoutIds);
    }
    const date=String(new Date())
    return(
        <>
            {
                showWorkouts&&
                <>
                <h1>Program Add form</h1>
                <form onSubmit={handleSubmit}>
                    <table>
                        <thead>
                            <tr><td colSpan={2}><h3>Program</h3></td></tr>
                            <tr>
                                <th>Name</th>
                                <th>Category</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input type={'text'} value={formData.name} onChange={(event)=>{setFormData({...formData,name:event.target.value})}}/>
                                </td>
                                <td>
                                    <input type={'text'} value={formData.category} onChange={(event)=>{setFormData({...formData,category:event.target.value})}}/>
                                </td>
                            </tr>
                            
                        </tbody>
                        </table>
                        <table>
                                <thead>
                                    <tr><td colSpan={2}><h3>Workouts</h3></td></tr>
                                    <tr>
                                    <th>Name</th>
                                    <th>Type</th>
                                    </tr>
                                </thead>  
                                <tbody>
                                    {
                                        workoutsToSelect.map((workout,index)=>{
                                            return(
                                                <tr key={`${date}_${index}`}>
                                                    <WorkoutItem workout={workout}/>
                                                    <td>
                                                        <input type={'checkbox'}
                                                                onChange={(event)=>{handleAddWorkout(event,workout.id)}}
                                                                name={`checkbox${index}`}
                                                                checked={checkedItems[`checkbox${index}`]}
                                                        />
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                        </table>
                    
                    <button onClick={handleSubmit}>Submit</button>
                </form>
                </>
            }
            <button onClick={handleBack}>Back</button>
        </>
    )
}
export default ProgramFormAdd