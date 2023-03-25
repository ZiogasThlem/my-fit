
import { addExerciseAsync, deleteExerciseAsync, getAllExercisesAsync, getExerciseByIdAsync, updateExerciseAsync } from "./exercise/exerciseSlice";
import { addWorkoutAsync, deleteWorkoutAsync, getAllWorkoutsAsync, updateWorkoutAsync } from "./workout/workoutSlice";

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
        else if(requestType=='getId'){
            console.log('mpika');
            dispatch(getExerciseByIdAsync({id:ID}));
        }
    }else if(itemType=='workout'){
        if(requestType=='get'){
            dispatch(getAllWorkoutsAsync());
        }
        //add
        else if(requestType=='post'){
            dispatch(addWorkoutAsync({itemPayload}));
        }
        //update
        else if(requestType=='patch'){
            // console.log('eftasa');
            dispatch(updateWorkoutAsync({id:ID,itemPayload}));
        }
        //delete
        else if(requestType=='delete'){
            dispatch(deleteWorkoutAsync({id:ID}));
        }
    }else if(itemType=='program'){

    }else if(itemType=='goal'){

    }
    
}

export default dispatchCruncher