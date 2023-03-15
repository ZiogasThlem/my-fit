import { createSlice } from "@reduxjs/toolkit";

export const programSlice = createSlice({
    name: 'program',
    initialState: {
        workouts: [], 
        count: 0,
        isComplete: false
    },
    reducers: {
        addWorkout: (state, workout) => {

            if (!workout.payload) return
            state.workouts.push(workout.payload)
            state.count += 1
            console.log(JSON.stringify(state.workouts));
        },
        completeWorkout: (state, workout) => {
            if (state.workouts.length === 0) return
            state.workouts.pop();
            console.log(JSON.stringify(state.workouts));
            if (state.count - 1 > 0) state.count -= 1
            else console.log("Complete!");
        } // doesnt rly work yet
    }
})

export const { addWorkout, completeWorkout } = programSlice.actions
export default programSlice.reducer