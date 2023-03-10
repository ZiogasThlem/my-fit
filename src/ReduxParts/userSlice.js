import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    
    name: 'user',
    initialState: {
        value: ''
    },
    reducers: {
        // function1: state => {
        //             body
        //      },
        // function2: state => {
        //             body
        //      }
    }
})

// export const { function1, function2 } = userSlice.actions

export default userSlice.reducer
