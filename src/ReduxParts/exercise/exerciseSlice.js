import { createSlice } from "@reduxjs/toolkit";

export const exerciseSlice = createSlice({
    name: 'exersice',
    initialState: {
        exerciseName: '',
        isComplete: false
    },
    reducers: {
        modifyExersice: (state) => 
            state.isComplete ?
                state.isComplete = false :
                state.isComplete = true
    } 
})

export const { modifyExersice } = exerciseSlice.actions



export const {exerciseAdded, exerciseUpdated, }

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

const exercisesSlice = createSlice({
    name: 'exercises',
    initialState,
    reducers:{
        //actions
    }
})

export default exerciseSlice.reducer