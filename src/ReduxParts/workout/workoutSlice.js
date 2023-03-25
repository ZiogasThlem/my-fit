import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const apiUrl = process.env.REACT_APP_API_LOCAL_URL;
const apiKey = process.env.REACT_APP_API_LOCAL_KEY;

export const getAllWorkoutsAsync = createAsyncThunk(
    'workout/getAllWorkoutsAsync',
    async ()=>{
        const resp = await fetch(`${apiUrl}workout`);
        if(resp.ok){
            const workouts = await resp.json();
        //    console.log(exercises);
            return workouts;
        }
    }
)

export const updateWorkoutAsync = createAsyncThunk('workout/updateWorkoutAsync',
    async(payload)=>{
        
        const resp = await fetch(`${apiUrl}workout/${payload.id}`,{
            method:'PATCH',
            headers:{'Content-type': 'application/json',
                'x-api-key':apiKey
                },
            
            body:JSON.stringify(
                // desc:payload.desc
                payload.itemPayload
            )
        });
        if(resp.ok){
            const workout = await resp.json();
            return workout;
        }
    }
    
);

export const addWorkoutAsync = createAsyncThunk('workout/addWorkoutAsync',
    async(payload)=>{
        const resp = await fetch(`${apiUrl}workout`,{
            method: 'POST',
            headers:{'Content-type': 'application/json',
            'x-api-key':apiKey
            },
            
            body:JSON.stringify(payload.itemPayload)
        });
        if(resp.ok){
            const workout = await resp.json();
            
            console.log('Workout successfully added');
            return workout
        }
    }
);

export const deleteWorkoutAsync = createAsyncThunk('workout/deteleWorkoutAsync',
    async(payload)=>{
        const resp = await fetch(`${apiUrl}workout/${payload.id}`,{
            method: 'DELETE',
            headers:{'Content-type': 'application/json',
            'x-api-key':apiKey
        },
    });
        if(resp.ok){
            const id=payload.id
            console.log(id);
            return id;
        }
        return false;
    }

)

export const getWorkoutByIdAsync = createAsyncThunk('workout/getWorkoutByIdAsync',
    async(payload)=>{
        const resp = await fetch(`${apiUrl}workout/${payload.id}`,{
            method:'GET',
            headers:{'Content-type':'application/json',
            'x-api-key':apiKey
        }
        });
        if(resp.ok){
            const workout = await resp.json();
            return workout;
        }
    }
)

export const workoutSlice = createSlice({
    name: 'workout',
    initialState: [{
        name: '',
        type:'',
        complete: false,
        exercise: [] 
    }],
    reducers: {
        // addExercise: (state, exercise) => {
        //     state.exercises.push(exercise.payload)
        //     state.count += 1
        //     console.log(JSON.stringify(state.exercises));
        // },
        // completeExercise: (state) => {
        //     if (state.exercises.length === 0) return
        //     state.exercises.pop();
        //     console.log(JSON.stringify(state.exercises));
        //     state.count -= 1
        //     if (state.count === 0) console.log("Complete!")
        // }
    },
    extraReducers:{
        [getAllWorkoutsAsync.fulfilled]:(state,action)=>{
            return state=action.payload;
        },
        [updateWorkoutAsync.fulfilled]:(state,action)=>{
            const workout = action.payload;
            const index = state.findIndex((workoutItem)=>workoutItem.id===action.payload.id);
            console.log('Updated exercise with index', index);
            console.log(action.payload);
            state[index]=workout;
        },
        [addWorkoutAsync.fulfilled]:(state,action)=>{
            console.log(action.payload);
            const workout = action.payload;
            state.push(workout);
        },
        [deleteWorkoutAsync.fulfilled]:(state,action)=>{
            if(action.payload!=false){
                const id = action.payload
                // console.log(id);
                // console.log(state);
                const index = state.findIndex((workoutItem)=>workoutItem.id===id);
                // console.log(index);
                // if(window.confirm(`Your index is${index} and id is ${id}`))
                //delete state[index];
                const stateLeft = [...state.slice(0,index)];
                const stateRight = [...state.slice(index+1,state.length)]
                state = []
                stateRight.forEach((workout)=>{stateLeft.push(workout)})
                state = [...stateLeft];
                
                console.log('Successfully deleted');
                // console.log(state);
                return state;
            }
            if(action.payload==false){
                console.log('Sth went wrong');
                return
            }
        },
        [getWorkoutByIdAsync.fulfilled]:(state,action)=>{
            console.log(action.payload);
            console.log(action.payload.workout);
            console.log(state);
            // state.exercise = []
            // state.push(action.payload)
            // state.push(action.payload)
            // state={};
            // state=action.payload;
            console.log(state);
            return action.payload;
        }
    }
})

export const { addExercise, completeExercise } = workoutSlice.actions
export default workoutSlice.reducer;
