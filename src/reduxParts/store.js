import { configureStore } from "@reduxjs/toolkit";
import exerciseReducer from "./reducers/exerciseSlice.js";
import workoutReducer from "./reducers/workoutSlice"
import programReducer from "./reducers/programSlice"
const store = configureStore({
  reducer: {
    exercise: exerciseReducer,
    workout:workoutReducer,
    program:programReducer
  },
});

export default store;
