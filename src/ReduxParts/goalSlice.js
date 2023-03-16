import { createSlice } from "@reduxjs/toolkit";

export const goalSlice = createSlice({
    name: 'goal',
    initialState: {
        goalName: 'do you even lift',
        programs: [],
        completedPrograms: 0,
        percentage: 0.0,
        isComplete: false
    },
    reducers: {
        completeGoal: state => {
            if (!state.isComplete) state.isComplete = true
            else state.isComplete = false
            console.log(state.isComplete);
        },
        doSomeProgress: state => {
            if (state.percentage + 10.0 <= 100) state.percentage += 10.0
            else state.isComplete = true
            console.log(`${state.goalName} is at ${state.percentage}%`);
            if (state.isComplete) console.log(state.goalName + ' is ' + state.isComplete);
        },
        anounceGoal: state => {
            console.log(state.goalName + ' is ' + state.isComplete);
        }
    }
})

export const { completeGoal, anounceGoal, doSomeProgress } = goalSlice.actions
export default goalSlice.reducer