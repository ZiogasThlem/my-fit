import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client } from "../../api/client";


const apiUrl = process.env.REACT_APP_API_LOCAL_URL;

const apiKey = process.env.REACT_APP_API_LOCAL_KEY;
// export default function exercisesReducer(state=initialState, action){
//     switch (action.type){

//     }
// }

export const getAllExercisesAsync = createAsyncThunk(
    'exercise/getAllExercisesAsync',
    async ()=>{
        const resp = await fetch(`${apiUrl}exercise`);
        if(resp.ok){
            const exercises = await resp.json();
        //    console.log(exercises);
            return exercises;
        }
    }
)

export const updateExerciseAsync = createAsyncThunk('exercise/updateExerciseAsync',
    async(payload)=>{
        
        const resp = await fetch(`${apiUrl}exercise/${payload.id}`,{
            method:'PATCH',
            headers:{'Content-type': 'application/json',
                'x-api-key':apiKey
                },
            
            body:JSON.stringify(
                // desc:payload.desc
                payload.exercisePayload
            )
        });
        if(resp.ok){
            const exercise = await resp.json();
            return exercise;
        }
    }
    
);

    


export const exerciseSlice = createSlice({
    name: 'exercise',
    initialState: [{
        // id:'',
        // name: '',
        // desc:'',
        // tmg:'',
        // repetitions:'',
        // img:'',
        // vid:'',
        // complete: false,
        // workout:[]
        
        name: '',
        desc:'',
        tmg:'',
        repetitions:0,
        img:'',
        vid:'',
        complete: false,
        workout:''
    }],
    reducers: {
        addExercise:(state, action)=>
            {
                const exercise = {
                    name: action.payload.name,
                    desc: action.payload.desc,
                    tmg: action.payload.tmg,
                    repetitions: action.payload.repetitions,
                    img: action.payload.img,
                    // vid: action.payload.vid,
                    complete: false,
                    workout:''
                };
                
                state.push(exercise);
            }
        ,
        modifyExersice: (state) => 
                state.complete = !state.complete
        ,
        getAllExercises:(state, action)=>{
            
            return action.payload.exercise;
            
        }
    },
    extraReducers:{
        [getAllExercisesAsync.fulfilled]:(state,action)=>{
            return state=action.payload;
            // console.log(action.payload);
            // for(let exer of action.payload.exercise){
            //     console.log("edooooooooooooo");
            //     state.push(exer);
            // }
            // return {...state,
            //     // exercise:action.payload.exercise};
                
            //     // name: action.payload.name,
            //     // desc: action.payload.desc,
            //     // tmg: action.payload.tmg,
            //     // repetitions: action.payload.repetitions,
            //     // img: action.payload.img,
            //     // complete: action.payload.complete,
            //     //     workout:action.payload.workout
            //     exercise:action.payload.exercise
            // };
        },
        [updateExerciseAsync.fulfilled]:(state,action)=>{
            const exercise = action.payload;
            const index = state.findIndex((exerciseItem)=>exerciseItem.id===action.payload.id);
            console.log('Updated exercise with id', index);
            console.log(action.payload);
            state[index]=exercise;
        }
    } 
})





// export const {exerciseAdded, exerciseUpdated, }

// export const fetchExercises = createAsyncThunk('exercises/fetchExercises', async () => {
//     const response = await client.get(`${apiUrl}/exercise`)
//     return response.data
//   })

// const initialState = [
//     {
//     name:"name value",
//     description:"some exercise description",
//     completed:true,
//     target_muscle_group:"target muscle group",
//     repetitions:"repetitions integer",
//     image:"some img exercise",
//     video:"some video link"    
//     },
//     {
//     name:"name value 2",
//     description:"some exercise description 2",
//     completed:true,
//     target_muscle_group:"target muscle group 2",
//     repetitions:"repetitions integer",
//     image:"some img exercise",
//     video:"some video link"    
//     }
// ]

// const exercisesSlice = createSlice({
//     name: 'exercises',
//     initialState,
//     reducers:{
//         //actions
//     }
// })

export const {addExercise,modifyExersice, getAllExercises} = exerciseSlice.actions;
export default exerciseSlice.reducer;