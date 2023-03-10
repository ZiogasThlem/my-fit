import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    
    name: 'user',
    initialState: {
        value: 'Larry'
    },
    reducers: {
        printUser: state => {
            console.log(state.value);
        },
        printUserTwice: state => {
            console.log(state.value.repeat(2));
        }
    }
})

export const { printUser, printUserTwice } = userSlice.actions

export default userSlice.reducer
