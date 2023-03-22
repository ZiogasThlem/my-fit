import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { deleteExerciseAsync, getAllExercisesAsync, getExerciseByIdAsync } from "../../ReduxParts/exercise/exerciseSlice";

const Test = (exercise)=>{
    const exerciseFromState = useSelector((state)=>state.exercise)
    const dispatch = useDispatch();
    const idToGet = 4;
    const idToDelete = 13;
    useEffect(()=>{
        dispatch(getAllExercisesAsync())
        let id = idToDelete;
        console.log(exerciseFromState);
        
        dispatch(deleteExerciseAsync({id}))
        id = idToGet;
        // dispatch(getExerciseByIdAsync({id}));
        // },[dispatch,idToGet,idToDelete,exerciseFromState])
    },[dispatch])
    console.log(exerciseFromState);
    // window.onbeforeunload = function(){
    //     return 
    // }
    // if(window.confirm(`Delete exercise with id ${idToDelete}??`)){
    // }else{
    //     // window.close()
    //     console.log('You chose not to delete');
    // }
   
    // if(window.confirm(`Get exercise with id ${idToGet}??`)){
        
        // }else{
            //     // window.close()
            // }
    

    
    return(
        <>
        </>
    )
}

export default Test