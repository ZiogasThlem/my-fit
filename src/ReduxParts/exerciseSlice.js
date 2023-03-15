import { createSlice } from "@reduxjs/toolkit";

export const exersiceSlice = createSlice({
    name: 'exersice',
    initialState: {
        isComplete: false
    },
    reducers: {
        modifyExersice: (state) => 
            state.isComplete ?
                state.isComplete = false :
                state.isComplete = true
    } 
})

export const { modifyExersice } = exersiceSlice.actions
export default exersiceSlice.reducer