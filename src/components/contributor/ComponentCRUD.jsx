import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import dispatchCruncher from "../../ReduxParts/dispatchCruncher";
import exerciseSlice, { addExerciseAsync, deleteExerciseAsync, getExercisesById, updateExerciseAsync } from "../../ReduxParts/exercise/exerciseSlice"
import ComponentFormButtons from "./ComponentFormButtons";
import ComponentFormInputs from "./ComponentFormInputs";
import ItemToEditAttributes from "./ItemToEditAttributes";

//item is the object from state
//forAdding is boolean(adding an item and tehn fetch to the API)
//itemType is (exercise or workout or program or goal)
//itemStructure is the structure of an item plus some types to use them for CRUD
const ComponentCRUD=({item,forAdding, itemType, itemStructure, itemChildType})=>{
    // console.log(item.id);
    
    
    const isContributor = true;
    // const forAdding = true;
    const forViewing = false;
    // const forEditing = true;
    const [forEditing,setforEditing]=useState(false);
    const [ID,setId]= useState(0);
    const [loaded,setLoaded]=useState(false);
    const dispatch = useDispatch();
    useEffect(()=>{
        if(item){
            setId(item.id)
        }
        if(!loaded){
            dispatchCruncher(dispatch,'',0,itemChildType,'get');
            setLoaded(true);
        }
    },[item?item.id:0])
// console.log(ID);
console.log(ID);
    // const [id, setId] =useState(0);
    const checkbox = useRef();
    const {register,handleSubmit}=useForm();
    
    
    let keyValue='';
    const items = useSelector((state)=>state[itemType])
    const itemChild = useSelector((state)=>state[itemChildType])

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
            const itemPayLoadKey = itemStructure[itemStructureKey][1];
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
    // const [childComponentPool,setChildComponentPool]=useState([])
    const childComponentPool=[]
    let index = 0;
    
    //iterate through item structure attributes
    // for(let itemStructureKey in itemStructure){
    //     let inputType = itemStructure[itemStructureKey][2];
    //     if(inputType=='array'){
    //         isArray=true;
    //     }else{
    //         isArray=false;
    //     }
    //     const inputValuekey = itemStructure[itemStructureKey][1];
    //     let inputNullValue = '';
    //     //if item does not exist put the input value as null
    //     const inputValue = forAdding?inputNullValue:item[inputValuekey];
    //     if(isArray){
    //         //construct the childComponentPool
    //         // for(let idElement of inputValue){
    //         //     console.log(idElement);
    //         //     // dispatchCruncher(dispatch,'',idElement,itemChildType,'getId')
    //         //     if(loaded){
    //         //         // setChildComponentPool([...itemChild]);
    //         //     }
    //         //     console.log(itemChild);
    //         // }
    //         // dispatch(getExercisesById(inputValue))
    //         // console.log(itemChild);
    //         // console.log(items);
    //     }
    //     // if(typeof inputValue =='number'){
    //     //     inputType = 'number';
    //     // }
    //     // if(inputType=='number'){
    //     //     inputNullValue = 0;
    //     // }
    //     const inputDefaultValue = forAdding?inputNullValue:inputValue;
    //     const labelName = itemStructure[itemStructureKey][0];
    //     const inputRegisterName = itemStructure[itemStructureKey][1];
    //     //struct the form
    //     itemToEditAttributesList.push(
    //         <ComponentFormInputs key={`exercise${ID}_${index++}`} 
    //         labelName={labelName} 
    //         forEditing={forEditing} 
    //         forAdding={forAdding} 
    //         isArray={isArray} 
    //         inputValue={inputValue} 
    //         inputType={inputType} 
    //         inputDefaultValue={inputDefaultValue} 
    //         inputRegisterName={inputRegisterName} 
    //         itemNameConfig={itemNameConfig} 
    //         register={register}>
    //         </ComponentFormInputs>
    //         // <ComponentCRUD key={`exercise${id}_${index++}`} switches={switches} fields={fields}/>
    //     )
        
    // }
    // console.log(childComponentPool);
    //render buttons

    // itemToEditAttributesList.push(
    //     !forViewing && <ComponentFormButtons key={`button_${ID}_${index++}`} forAdding={forAdding} forEditing={forEditing} onSubmit={onSubmit}/>,
    //     )

        // <div key={`button_${ID}_${index++}`}>
            {/* {!forAdding && forEditing && <button type="submit">Save</button>}     */}
            {/* {!forAdding && !forEditing && <button onClick={onSubmit}>Delete</button>}     */}
            {/* {forAdding && !forEditing && <button type="submit">Add</button>}     */}
        {/* </div> */}

    

    return(
    <>
        {!forViewing && !forAdding && 
        <div key={`checkbox${ID}`}>
            <input type={'checkbox'} ref={checkbox} onChange={handleChange} />
        </div>}
        {/* for deleting */}
        {!forViewing && !forAdding && !forEditing && itemToEditAttributesList}
        {!forViewing && 
        // (forAdding || forEditing) &&
        <div key={`form${ID}`}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <ItemToEditAttributes itemStructure={itemStructure} register={register} onSubmit={onSubmit} forAdding={forAdding} forEditing={forEditing} forViewing={forViewing} item={item} ID={ID} itemNameConfig={itemNameConfig}></ItemToEditAttributes>
            </form>
        </div>
         }
        
    </>
    )

}

export default ComponentCRUD