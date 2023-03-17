import { configureStore } from "@reduxjs/toolkit";

import exercisesReducer from '../components/exercise/ExercisesSlice';

export default configureStore({
    reducer:{
        exercises:exercisesReducer
        //other reducers here
    }
})