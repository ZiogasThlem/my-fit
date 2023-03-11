import { createSlice } from "@reduxjs/toolkit";

export const workoutSlice = createSlice({
    name: 'workout',
    initialState: {
        exercises: [], 
        count: 0,
        isComplete: false
    },
    reducers: {
        addExercise: (state, exercise) => {
            state.exercises.push(exercise)
            state.count += 1
        }

    }
})

export const { addExercise } = workoutSlice.actions
export default workoutSlice.reducer