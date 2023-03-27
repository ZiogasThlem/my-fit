import { configureStore } from "@reduxjs/toolkit";
import exerciseReducer from "./reducers/exerciseSlice.js";
import workoutReducer from "./reducers/workoutSlice"

const store = configureStore({
  reducer: {
    exercise: exerciseReducer,
    workout:workoutReducer,
  },
});

export default store;
