import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice.js'
import goalReducer from './goalSlice.js'
import programReducer from './programSlice.js'



export default configureStore({

    reducer: {
        user: userReducer,
        goal: goalReducer,
        program: programReducer
    }
})