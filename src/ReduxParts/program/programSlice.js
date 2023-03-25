import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const apiUrl = process.env.REACT_APP_API_LOCAL_URL;
const apiKey = process.env.REACT_APP_API_LOCAL_KEY;

export const getAllProgramsAsync = createAsyncThunk(
    'program/getAllProgramsAsync',
    async ()=>{
        const resp = await fetch(`${apiUrl}program`);
        if(resp.ok){
            const programs = await resp.json();
        //    console.log(exercises);
            return programs;
        }
    }
)

export const updateProgramAsync = createAsyncThunk('program/updateProgramAsync',
    async(payload)=>{
        
        const resp = await fetch(`${apiUrl}program/${payload.id}`,{
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
            const program = await resp.json();
            return program;
        }
    }
    
);

export const addProgramAsync = createAsyncThunk('program/addProgramAsync',
    async(payload)=>{
        const resp = await fetch(`${apiUrl}program`,{
            method: 'POST',
            headers:{'Content-type': 'application/json',
            'x-api-key':apiKey
            },
            
            body:JSON.stringify(payload.itemPayload)
        });
        if(resp.ok){
            const program = await resp.json();
            
            console.log('Program successfully added');
            return program
        }
    }
);

export const getProgramByIdAsync = createAsyncThunk('program/getProgramByIdAsync',
    async(payload)=>{
        const resp = await fetch(`${apiUrl}program/${payload.id}`,{
            method:'GET',
            headers:{'Content-type':'application/json',
            'x-api-key':apiKey
        }
        });
        if(resp.ok){
            const program = await resp.json();
            return program;
        }
    }
)

export const deleteProgramAsync = createAsyncThunk('exercise/deleteProgramAsync',
    async(payload)=>{
        const resp = await fetch(`${apiUrl}program/${payload.id}`,{
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

export const programSlice = createSlice({
    name: 'program',
    initialState: {
        goal:[],
        name: '',
        workout: [], 
        category:[],
        count: 0,
        complete: false
    },
    reducers: {
        // addWorkout: (state, workout) => {

        //     if (!workout.payload) return
        //     state.workouts.push(workout.payload)
        //     state.count += 1
        //     console.log(JSON.stringify(state.workouts));
        // },
        // completeWorkout: (state, workout) => {
        //     if (state.workouts.length === 0) return
        //     state.workouts.pop();
        //     console.log(JSON.stringify(state.workouts));
        //     state.count -= 1
        //     if (state.count === 0) console.log("Complete!")
            
        // } // doesnt rly work yet
    },
    extraReducers:{
        [getAllProgramsAsync.fulfilled]:(state,action)=>{
            return state=action.payload
        },
        [updateProgramAsync.fulfilled]:(state,action)=>{
            const program = action.payload;
            const index = state.findIndex((programItem)=>programItem.id===action.payload.id);
            console.log('Updated program with index', index);
            console.log(action.payload);
            state[index]=program;
        },
        [addProgramAsync.fulfilled]:(state,action)=>{
            console.log(action.payload);
            const program = action.payload;
            state.push(program);
        },
        [deleteProgramAsync.fulfilled]:(state,action)=>{
            if(action.payload!=false){
                const id = action.payload
                // console.log(id);
                // console.log(state);
                const index = state.findIndex((programItem)=>programItem.id===id);
                // console.log(index);
                // if(window.confirm(`Your index is${index} and id is ${id}`))
                //delete state[index];
                const stateLeft = [...state.slice(0,index)];
                const stateRight = [...state.slice(index+1,state.length)]
                state = []
                stateRight.forEach((exercise)=>{stateLeft.push(exercise)})
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
        [getProgramByIdAsync.fulfilled]:(state,action)=>{
            console.log(action.payload);
            console.log(action.payload.exercise);
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

export const { addWorkout, completeWorkout } = programSlice.actions
export default programSlice.reducer
