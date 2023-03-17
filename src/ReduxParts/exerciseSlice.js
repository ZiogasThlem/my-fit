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
export default exerciseSlice.reducer