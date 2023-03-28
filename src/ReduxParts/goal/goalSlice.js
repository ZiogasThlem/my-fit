import { createSlice } from "@reduxjs/toolkit";

export const goalSlice = createSlice({
    name: 'goal',
    initialState: {
        goalName: ['do you even lift bro'],// 'leg day', 'power up', 'run Forest, run'],
        programs: [], //array of workout objects
        completedPrograms: 0,
        percentage: 0.0,
        isComplete: false
    },
    reducers: {
        completeGoal: state => {
                state.percentage = 0.0
                state.isComplete = true
                state.completedPrograms += 1
        },
        doSomeProgress: state => {
            state.isComplete = false
            if (state.percentage + 10.0 <= 100.0) state.percentage += 10.0
        },
        subtractFromGoal: state => {
            if (state.percentage >= 10.0) state.percentage -= 10.0
        },
        resetGoal: state => {
            if (state.goalName.length - 1 < state.completedPrograms)
            state.completedPrograms = 0
        }
    }
})

export const { completeGoal, doSomeProgress, subtractFromGoal, resetGoal } = goalSlice.actions
export default goalSlice.reducer