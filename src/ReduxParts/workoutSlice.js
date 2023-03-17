import { createSlice } from "@reduxjs/toolkit";

export const workoutSlice = createSlice({
    name: 'workout',
    initialState: {
        workoutName: '',
        exercises: [], 
        count: 0,
        isComplete: false
    },
    reducers: {
        addExercise: (state, exercise) => {
            state.exercises.push(exercise.payload)
            state.count += 1
            console.log(JSON.stringify(state.exercises));
        },
        completeExercise: (state) => {
            if (state.exercises.length === 0) return
            state.exercises.pop();
            console.log(JSON.stringify(state.exercises));
            state.count -= 1
            if (state.count === 0) console.log("Complete!")
        }
    }
})

export const { addExercise, completeExercise } = workoutSlice.actions
export default workoutSlice.reducer