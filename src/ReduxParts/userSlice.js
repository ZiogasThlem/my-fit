import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    
    name: 'user',
    initialState: {
        username: '',
        goals: []
    },
    reducers: {
        printUser: (state, name) => {
            state.value = name
            console.log(name.payload);
        }
    }
})

export const { printUser } = userSlice.actions

export default userSlice.reducer
