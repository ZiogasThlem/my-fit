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

            state.workouts.push(workout)
            state.count += 1
            console.log(JSON.stringify(state.workouts));
            state.workouts.forEach( w => console.log(w))
        },
        completeWorkout: (state) => {
            state.workouts.pop();
            console.log(JSON.stringify(state.workouts));
            if (state.count - 1 > 0) state.count -= 1
            else console.log("Complete!");
        } // doesnt rly work yet
    }
})

export const { addWorkout, completeWorkout } = programSlice.actions
export default programSlice.reducer