import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = process.env.REACT_APP_API_URL;
const requestUrl = `${apiUrl}workout`
const headerS = {'Content-Type': 'application/json'}

export const getWorkoutFromApi = createAsyncThunk(
  'workout/getWorkoutFromApi',
  async () => {
    const response = await fetch(requestUrl);
    const workouts = await response.json();
    return workouts;
  }
);

export const workoutSlice = createSlice({
    name: 'workout',
    initialState:  [{
        name: '',
        type: '',
        exercises: [], 
        program:[],
        complete: false }]
    ,
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
    },
    extraReducers: {
        [getWorkoutFromApi.fulfilled]: (state, action) => {
            console.log(action.payload[0]);
            return action.payload
        }
    }
})

export const { addExercise, completeExercise } = workoutSlice.actions
export default workoutSlice.reducer