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
    const componentNameConfig = exerciseNameConfig;
    
    
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
       
        console.log(values);
        const itemPayload = {
        }
        
        for (let exerciseStructureKey in exerciseStructure){
            const exercisePayLoadKey = exerciseStructure[exerciseStructureKey][2];
            itemPayload[exercisePayLoadKey] = values[exercisePayLoadKey];
        }
        // console.log(exercisePayload);
        //save
        if(!forAdding && forEditing){
            console.log('pressed save button');
            console.log(itemPayload);
            dispatch(updateExerciseAsync({id , itemPayload}))
        }
        //add
        if(forAdding && !forEditing){
            console.log('pressed add button');
            console.log(itemPayload);
            dispatch(addExerciseAsync(
                {itemPayload}
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
        'exerciseVid': [exercise.vid, 'Video', 'vid'],
        'exerciseComplete': [exercise.complete, 'Completed', 'complete'],
        'exerciseWorkout': [exercise.workout, 'Workouts', 'workout']
        
    }

    const exerciseToEditAttributesList=[]
    const exerciseToAdd={}
    let index = 0;
    
    //iterate through exercise structure
    for(let exerciseStructureKey in exerciseStructure){
        let inputType = 'text';
        const inputValue = exerciseStructure[exerciseStructureKey][0];
        let inputNullValue = '';
        if(typeof inputValue =='number'){
            inputType = 'number';
        }
        if(inputType=='number'){
            inputNullValue = 0;
        }
        const inputDefaultValue = forAdding?inputNullValue:inputValue;
        const labelName = exerciseStructure[exerciseStructureKey][1];
        const inputRegisterName = exerciseStructure[exerciseStructureKey][2];
        // const switches = {
        //     'forEditing':forEditing,
        //     'forAdding':forAdding
        // }

        // const fields = {
        //     'labelName':labelName,
        //     'inputType':inputType,
        //     'inputValue':inputValue,
        //     'inputDefaultValue':inputDefaultValue,
        //     'inputRegisterName':inputRegisterName,
        //     'componentNameConfig': componentNameConfig,
        //     'index':index,
        //     'id':id

        // }
       
        // console.log(switches);
        // console.log(fields);
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
        {/* render the form */}
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