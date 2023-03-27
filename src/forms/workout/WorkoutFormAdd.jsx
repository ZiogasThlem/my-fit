import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { removeElementFromArray } from "../../helpers/removeElementFromArray";
import { addWorkout } from "../../reduxParts/reducers/workoutSlice";
import ExerciseItem from "../exercise/ExerciseItem";

const WorkoutFormAdd = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData,setFormData]= useState({name: '', type:'', exercise:[]});
    const [exercisesToSelect,setExercisesToSelect] = useState();
    const [exerciseIds,setExerciseIds]=useState([]);
    const [checkedItems,setCheckedItems] = useState({});
    const {exercises, status} = useSelector((state)=>{
        console.log(state.exercise);
        return state.exercise});
    const [showExercises,setshowExercises] = useState(false);
    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log(formData);
        const itemPayload = {name:formData.name, type:formData.type, exercise:exerciseIds}
        dispatch(addWorkout(itemPayload));
    }
    useEffect(()=>{
            if(exercisesToSelect!=exercises && exercisesToSelect==undefined){
                setExercisesToSelect([...exercises]);
                console.log(exercisesToSelect);
                console.log(exercises);
               
            }
    },[exercisesToSelect,exercises])
    useEffect(()=>{
        if(exercisesToSelect!=undefined){
            console.log(exercisesToSelect);
            setshowExercises(true)
        }else{
            setshowExercises(false)
        }
    },[exercisesToSelect,showExercises])
    const handleShowExercises = ()=>{
        // setshowExercises(!showExercises)
    }
    const handleBack = ()=>{
        navigate('/workouts');
    }
    const handleAddExercise =(event,id)=>{
        // setCheckedItems({
        //     // ...checkedItems,[event.target.name]:event.target.checked,
        //     ...checkedItems,[event.target.name]:!checkedItems[event.target.name],
        // });
        // if(checkedItems[event.target.name]){
            
        //     if(exerciseIds!=undefined){
        //         if(!exerciseIds.includes(id)){
        //             setExerciseIds([...exerciseIds,id]);
        //         }
        //     }else{
        //         setExerciseIds([...exerciseIds,id])
        //     }
        // }else{
        //     setExerciseIds(removeElementFromArray(exerciseIds,id))
        // }
        const isChecked = event.target.checked;
        setCheckedItems(prevState => ({
            ...prevState,
            [event.target.name]: isChecked
        }));
        if (isChecked){
            if(!exerciseIds.includes(id)){
                setExerciseIds([...exerciseIds, id]);
            }
        } else {
            setExerciseIds(removeElementFromArray(exerciseIds, id))
        }
        console.log(exerciseIds);
        console.log(checkedItems);
    }
    

    const date = String(new Date())
    if(!showExercises){
        return (<div>Loading...</div>)
    }
    return(
        <>
        {showExercises &&<>
                    <h1>Workout Add form</h1>
                        <form onSubmit={handleSubmit}>
                            <table>
                                <thead>
                                    <tr>
                                    <th>Name</th>
                                    <th>Type</th>
                                    </tr>
                                </thead>    
                                <tbody>
                                    <tr>
                                        <td>
                                            <input type={'text'} value={formData.name} onChange={(event)=>setFormData({...formData,name:event.target.value})}/>
                                        </td>                        
                                        <td>
                                            <input type={'text'} value={formData.type} onChange={(event)=>setFormData({...formData,type:event.target.value})}/>
                                        </td>
                                    </tr>                
                                
                                    </tbody>
                            </table>
                            <table>
                                <thead>
                                    <tr>                
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Muscle Group</th>
                                        <th>Repetitions</th>
                                        <th>Image</th>
                                        <th>Video</th>
                                        <th>Add to workout</th>
                                    
                                    </tr>
                                </thead>
                                <tbody>

                                
                                {
                                    exercisesToSelect.map((exercise,index)=>{
                                        console.log(index);
                                        return(
                                            <tr key={`${date}_${index}`}>
                                                <ExerciseItem exercise={exercise}/>
                                                <td>
                                                    <input  type={'checkbox'} 
                                                            onChange={(event)=>{handleAddExercise(event,exercise.id)}} 
                                                            name={`checkbox${index}`}
                                                            checked={checkedItems[`checkbox${index}`]} >
                                                    </input>
                                                </td>
                                            </tr>
                                            )
                                        }
                                    )  
                                }
                                </tbody>
                                </table>                                                                                                
                            <button onClick={handleSubmit}>Submit</button>
                        </form>
                            <button onClick={handleShowExercises}>Show exercises</button>
                        </>
                    }
                <button onClick={handleBack}>Back</button>
        </>
    )
}
export default WorkoutFormAdd