import { createSlice } from "@reduxjs/toolkit";

export const goalSlice = createSlice({
    name: 'goal',
    initialState: {
        goalName: 'do you even lift',
        percentage: 0,
        value: false
    },
    reducers: {
        completeGoal: state => {
            if (!state.value) state.value = true
            else state.value = false
            console.log(state.value);
        },
        doSomeProgress: state => {
            if (state.percentage + 10 <= 100) state.percentage += 10
            else state.value = true
            console.log(`${state.goalName} is at ${state.percentage}%`);
            if (state.value) console.log(state.goalName + ' is ' + state.value);
        },
        anounceGoal: state => {
            console.log(state.goalName + ' is ' + state.value);
        }
    }
})

export const { completeGoal, anounceGoal, doSomeProgress } = goalSlice.actions
export default goalSlice.reducer