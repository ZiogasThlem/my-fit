import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import dispatchCruncher from "../../ReduxParts/dispatchCruncher";
import exerciseSlice, { addExerciseAsync, deleteExerciseAsync, updateExerciseAsync } from "../../ReduxParts/exercise/exerciseSlice"


//item is the object from state
//forAdding is boolean(adding an item and tehn fetch to the API)
//itemType is (exercise or workout or program or goal)
//itemStructure is the structure of an item plus some types to use them for CRUD
const ComponentCRUD=({item,forAdding, itemType, itemStructure})=>{
    // console.log(item.id);
    const isContributor = true;
    // const forAdding = true;
    const forViewing = false;
    // const forEditing = true;
    const [forEditing,setforEditing]=useState(false);
    const [ID,setId]= useState(item.id);
    useEffect(()=>{
        setId(item.id)
    },[item.id])
// console.log(ID);
console.log(ID);
    // const [id, setId] =useState(0);
    const checkbox = useRef();
    const {register,handleSubmit}=useForm();
    const dispatch = useDispatch();
    
    let keyValue='';
    const items = useSelector((state)=>state[itemType])

    // useEffect(()=>{

        if(itemType=='exercise'){
            // let items = useSelector((state)=>state.exercise)
            keyValue='exercise';
        }else if(itemType=='workout'){
            // let items = useSelector((state)=>state.workout)
            keyValue='workout';
        }else if(itemType=='program'){
            // let items = useSelector((state)=>state.program)
            keyValue='program';
            
        }
    // })
    // const id = items.id;

    const itemNameConfig = {
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
       
        console.log(values);
        const itemPayload = {
        }
        
        //struct the payload
        for (let itemStructureKey in itemStructure){
            const itemPayLoadKey = itemStructure[itemStructureKey][2];
            itemPayload[itemPayLoadKey] = values[itemPayLoadKey];
        }
        // console.log(exercisePayload);
        //save
        if(!forAdding && forEditing){
            console.log('pressed save button');
            // dispatch(updateExerciseAsync({id:ID , itemPayload}))
            
            dispatchCruncher(dispatch,itemPayload,ID,itemType,'patch')
        }
        //add
        if(forAdding && !forEditing){
            console.log('pressed add button');
            console.log(itemPayload);

            // dispatch(addExerciseAsync(
            //     {itemPayload}
            // ))
            dispatchCruncher(dispatch,itemPayload,ID,itemType,'post')
            
        }
        //delete
        if(!forAdding && !forEditing){
            console.log('pressed delete button');
            console.log(item);
            // dispatch(deleteExerciseAsync({id:ID}))
            dispatchCruncher(dispatch,itemPayload,ID,itemType,'delete')
        }
        
    }

    //we must define exercise if it is null
    // const itemStructure={
    //     //value, attribute name to user, attribute name to handle
    //     'exerciseName': [item.name, 'Name', 'name'],
    //     'exerciseDesc': [item.desc, 'Description', 'desc'],
    //     'exerciseTmg': [item.tmg, 'Muscle group', 'tmg'],
    //     'exerciseRepetitions':[item.repetitions, 'Repetitions', 'repetitions'],
    //     'exerciseImg': [item.img, 'Image', 'img'],
    //     'exerciseVid': [item.vid, 'Video', 'vid'],
    //     'exerciseComplete': [item.complete, 'Completed', 'complete'],
    //     'exerciseWorkout': [item.workout, 'Workouts', 'workout']
        
    // }

    const itemToEditAttributesList=[]
    
    let index = 0;
    
    //iterate through exercise structure
    for(let itemStructureKey in itemStructure){
        let inputType = itemStructure[itemStructureKey][3];
        const inputValuekey = itemStructure[itemStructureKey][2];
        const inputValue = item[inputValuekey];
        let inputNullValue = '';
        // if(typeof inputValue =='number'){
        //     inputType = 'number';
        // }
        // if(inputType=='number'){
        //     inputNullValue = 0;
        // }
        const inputDefaultValue = forAdding?inputNullValue:inputValue;
        const labelName = itemStructure[itemStructureKey][1];
        const inputRegisterName = itemStructure[itemStructureKey][2];
        //struct the form
        itemToEditAttributesList.push(
            <div key={`exercise${ID}_${index++}`}>
                <label>
                    {`${labelName}:`}
                    {!forEditing && !forAdding && inputValue}
                    {(forAdding || forEditing) && 
                    <input type={inputType} defaultValue={inputDefaultValue} {...register(inputRegisterName,itemNameConfig)}/>}
                </label>
            </div>
            // <ComponentCRUD key={`exercise${id}_${index++}`} switches={switches} fields={fields}/>
        )
        
    }
    //render buttons
    itemToEditAttributesList.push(
        !forViewing &&
        <div key={`button_${ID}_${index++}`}>
            {!forAdding && forEditing && <button type="submit">Save</button>}    
            {!forAdding && !forEditing && <button onClick={onSubmit}>Delete</button>}    
            {forAdding && !forEditing && <button type="submit">Add</button>}    
        </div>
    )

    

    return(
    <>
        {!forViewing && !forAdding && 
        <div key={`checkbox${ID}`}>
            <input type={'checkbox'} ref={checkbox} onChange={handleChange} />
        </div>}
        {/* for deleting */}
        {!forViewing && !forAdding && !forEditing && itemToEditAttributesList}
        {!forViewing && (forAdding || forEditing)&&
        <div key={`form${ID}`}>
            <form onSubmit={handleSubmit(onSubmit)}>
                {itemToEditAttributesList}
            </form>
        </div>
         }
        
    </>
    )

}

export default ComponentCRUD