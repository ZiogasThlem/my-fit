import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    
    name: 'user',
    initialState: {
        value: 'larry'
    },
    reducers: {
        printUser: state => {
            console.log(state.value);
        },
        printUserTwice: state => {
            state.value += "*"
            console.log(state.value + ' ' + state.value);
        }
    }
})

export const { printUser, printUserTwice } = userSlice.actions

export default userSlice.reducer
