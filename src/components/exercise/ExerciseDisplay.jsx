import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import exerciseSlice, { addExerciseAsync, deleteExerciseAsync, updateExerciseAsync } from "../../ReduxParts/exercise/exerciseSlice"

const ExcerciseDisplay=({exercise,forAdding})=>{
    const isContributor = true;
    // const forAdding = true;
    const forViewing = false;
    // const forEditing = true;
    const [forEditing,setforEditing]=useState(false);
    // const [id, setId] =useState(0);
    const checkbox = useRef();
    const {register,handleSubmit}=useForm();
    const dispatch = useDispatch();
    const exercises = useSelector((state)=>state.exercise)
    const id = exercise.id;

    const exerciseNameConfig = {
        required: true,
        minLength:2
    }
    
    
    function handleChange(){
        if(checkbox.current.checked){
            console.log('checkbox clicked');
            setforEditing(true)
            
            return
        }
        setforEditing(false)
        return
    }


    const onSubmit = (values)=>{
        // let id = 0
        // if(exercise.id){
        //     console.log(exercise.id);
        //     setId(exercise.id);
        // }
        console.log(values);
        const exercisePayload = {
        }
        
        for (let exerciseStructureKey in exerciseStructure){
            const exercisePayLoadKey = exerciseStructure[exerciseStructureKey][2];
            exercisePayload[exercisePayLoadKey] = values[exercisePayLoadKey];
        }
        // console.log(exercisePayload);
        //save
        if(!forAdding && forEditing){
            console.log('pressed save button');
            console.log(exercisePayload);
            dispatch(updateExerciseAsync({id , exercisePayload}))
        }
        //add
        if(forAdding && !forEditing){
            console.log('pressed add button');
            console.log(exercisePayload);
            dispatch(addExerciseAsync(
                {exercisePayload}
            ))
        }
        //delete
        if(!forAdding && !forEditing){
            console.log('pressed delete button');
            console.log(exercise);
            dispatch(deleteExerciseAsync({id}))
        }
        
    }

    //we must define exercise if it is null
    const exerciseStructure={
        //value, attribute name to user, attribute name to handle
        'exerciseName': [exercise.name, 'Name', 'name'],
        'exerciseDesc': [exercise.desc, 'Description', 'desc'],
        'exerciseTmg': [exercise.tmg, 'Muscle group', 'tmg'],
        'exerciseRepetitions':[exercise.repetitions, 'Repetitions', 'repetitions'],
        'exerciseImg': [exercise.img, 'Image', 'img'],
        'exerciseVid': [exercise.video, 'Video', 'vid'],
        'exerciseComplete': [exercise.complete, 'Completed', 'complete'],
         'exerciseWorkout': [exercise.workout, 'Workouts', 'workout']
        
    }

    const exerciseToEditAttributesList=[]
    const exerciseToAdd={}
    let index = 0;
    // let id = 0;
    //     if(exercise.id){
    //         id= exercise.id;
    //     }
    //create checkbox
    // exerciseToEditAttributesList.push(
        
    // )
    //iterate through exercise structure
    for(let exerciseStructureKey in exerciseStructure){
        let inputType = 'text';
        let inputValue = exerciseStructure[exerciseStructureKey][0];
        let inputDefaultValue = forAdding?'':inputValue;
        let labelName = exerciseStructure[exerciseStructureKey][1];
        let inputRegisterName = exerciseStructure[exerciseStructureKey][2];
        if(typeof inputValue =='number'){
            inputType = 'number';
        }
        
        
        exerciseToEditAttributesList.push(
            <div key={`exercise${id}_${index++}`}>
                <label>
                    {`${labelName}:`}
                    {!forEditing && !forAdding && inputValue}
                    {(forAdding || forEditing) && 
                    <input type={inputType} defaultValue={inputDefaultValue} {...register(inputRegisterName,exerciseNameConfig)}/>}
                </label>
            </div>
        )
        
    }
    //render buttons
    exerciseToEditAttributesList.push(
        !forViewing &&
        <div key={`button_${id}_${index++}`}>
            {!forAdding && forEditing && <button type="submit">Save</button>}    
            {!forAdding && !forEditing && <button onClick={onSubmit}>Delete</button>}    
            {forAdding && !forEditing && <button type="submit">Add</button>}    
        </div>
    )

    

    return(
    <>
        {!forViewing && !forAdding && 
        <div key={`checkbox${id}`}>
            <input type={'checkbox'} ref={checkbox} onChange={handleChange} />
        </div>}
        {/* for deleting */}
        {!forViewing && !forAdding && !forEditing && exerciseToEditAttributesList}
        {!forViewing && (forAdding || forEditing)&&
        <div key={`form${id}`}>
            <form onSubmit={handleSubmit(onSubmit)}>
                {exerciseToEditAttributesList}
            </form>
        </div>
         }
        
    </>
    )

}

export default ExcerciseDisplay