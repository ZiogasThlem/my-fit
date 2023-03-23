
import { addExerciseAsync, deleteExerciseAsync, getAllExercisesAsync, updateExerciseAsync } from "./exercise/exerciseSlice";

function dispatchCruncher (dispatch,itemPayload,id, itemType, requestType){
    // const dispatch = useDispatch();
    const ID = id;
    // console.log('mpika');
    console.log(itemPayload);
    console.log(ID);
    console.log(itemType);
    if(itemType=='exercise'){
        // console.log('okk');
        //retrieve
        if(requestType=='get'){
            dispatch(getAllExercisesAsync());
        }
        //add
        else if(requestType=='post'){
            dispatch(addExerciseAsync({itemPayload}));
        }
        //update
        else if(requestType=='patch'){
            // console.log('eftasa');
            dispatch(updateExerciseAsync({id:ID,itemPayload}));
        }
        //delete
        else if(requestType=='delete'){
            dispatch(deleteExerciseAsync({id:ID}));
        }
    }else if(itemType=='workout'){

    }else if(itemType=='program'){

    }else if(itemType=='goal'){

    }
    
}

export default dispatchCruncher