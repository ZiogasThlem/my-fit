import { createSlice } from "@reduxjs/toolkit";

export const goalSlice = createSlice({
    name: 'goal',
    initialState: {
        goalName: 'do you even lift',
        value: true
    },
    reducers: {
        completeGoal: state => {
            if (!state.value) state.value = true
            else state.value = false
            console.log(state.value);
        },
        anounceGoal: state => {
            console.log(state.goalName + ' ' + state.value);
        }
    }
})

export const { completeGoal, anounceGoal} = goalSlice.actions
export default goalSlice.reducer