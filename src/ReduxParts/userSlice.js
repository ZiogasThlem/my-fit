import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    
    name: 'user',
    initialState: {
        value: ''
    },
    reducers: {
        printUser: state => {
            console.log(state.value);
        }
    }
})

export const { printUser } = userSlice.actions

export default userSlice.reducer
