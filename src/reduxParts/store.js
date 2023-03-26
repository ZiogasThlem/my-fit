import { configureStore } from "@reduxjs/toolkit";
import exerciseReducer from "./reducers/exerciseSlice.js";


const store = configureStore({
  reducer: {
    exercise: exerciseReducer,
    // workouts:workoutReducer
  },
});

export default store;
