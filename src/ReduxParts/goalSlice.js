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
            if (state.percentage === 100.0) {
                state.percentage = 0.0
                state.isComplete = true
            }
        },
        doSomeProgress: state => {
            if (state.percentage + 10.0 <= 100.0) state.percentage += 10.0
        },
        subtractFromGoal: state => {
            if (state.percentage >= 10.0) state.percentage -= 10.0
        }
    }
})

export const { completeGoal, doSomeProgress, subtractFromGoal } = goalSlice.actions
export default goalSlice.reducer