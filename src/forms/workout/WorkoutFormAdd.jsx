import React, { useEffect, useState } from "react";
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
    const [checkedItems,setCheckedItems] = useState([]);
    const [isChecked,setIsChecked]=useState(false);
    const [idTohandle,setIdTohandle] = useState();
    const [eventCapture, setEventCapture] = useState();
    const [selectedExercisesIds,setSelectedExercisesIds]=useState([]);
    const {exercises, status} = useSelector((state)=>{
        console.log(state.exercise);
        return state.exercise});
    const [showExercises,setshowExercises] = useState(false);

    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log(formData);
        const itemPayload = {name:formData.name, type:formData.type, exercise:exerciseIds, program:[1], complete:false}
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
    useEffect(()=>{
        if(eventCapture!=undefined){
            if(eventCapture.target.checked){
                setIsChecked(true)
            }else{
                setIsChecked(false)
            }
        }
    },[eventCapture])
    useEffect(()=>{
       
            if(isChecked){
                setCheckedItems([...checkedItems, idTohandle]);
                console.log(checkedItems);
            }else{
                setCheckedItems(checkedItems.filter((id) => id !== idTohandle));
                console.log(checkedItems);
            }
          
    },[isChecked])
    const handleShowExercises = ()=>{
        // setshowExercises(!showExercises)
    }
    const handleBack = ()=>{
        navigate('/workouts');
    }
    const handleAddExercise =(event,itemId)=>{
        setEventCapture(event);
        // const isChecked = event.target.checked;
        // setCheckedItems(prevState => ({
        //     ...prevState,
        //     [event.target.name]: isChecked
        // }));
        // if (isChecked){
        //     if(!exerciseIds.includes(id)){
        //         setExerciseIds([...exerciseIds, id]);
        //     }
        // } else {
        //     setExerciseIds(removeElementFromArray(exerciseIds, id))
        // }
        // console.log(event.target.checked);
        
            // setIsChecked(event.target.checked)
        // console.log(isChecked);
        
        setIdTohandle(itemId)
        // const itemId = idTohandle
        
        // console.log(itemId);
        // console.log(checkedItems);
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
                            <button onClick={handleSubmit}>Submit</button>
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
                                        // console.log(index);
                                        return(
                                            <React.Fragment key={`${date}_${index}`}>
                                            <tr key={`${date}_${index}`}>
                                                <ExerciseItem exercise={exercise}/>
                                                <td>
                                                    <input  type={'checkbox'}
                                                            onChange={()=>{setSelectedExercisesIds(
                                                                (prevIds)=>{
                                                                    const newIds =[...new Set(prevIds),exercise.id];   
                                                                    if(newIds!=undefined){
                                                                       return [...new Set(newIds)];
                                                                        
                                                                    }else{
                                                                        return;
                                                                    }
                                                                }
                                                                )}}
                                                            // onClick={(event)=>{handleAddExercise(event,exercise.id)}}
                                                            
                                                            // on
                                                            // onClickCapture={(event)=>{setIsChecked(event.target.checked)}} 
                                                            // onClick={()=>handleAddExercise(exercise.id)}
                                                            name={`checkbox${index}`}
                                                            // checked={checkedItems[`checkbox${index}`]} >
                                                            // checked={checkedItems.includes(exercise.id)} >
                                                            
                                                            >
                                                    </input>
                                                </td>
                                            </tr>
                                            </React.Fragment>
                                            )
                                        }
                                    )  
                                }
                                </tbody>
                                </table>                                                                                                
                        </form>
                            <button onClick={handleShowExercises}>Show Exercises</button>
                        </>
                    }
                <button onClick={handleBack}>Back</button>
        </>
    )
}
export default WorkoutFormAdd