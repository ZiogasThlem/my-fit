import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
const apiUrl = process.env.REACT_APP_API_URL;


export const getProgram = createAsyncThunk(
    'programs/getProgram',
    async () => {
        const requestUrl = `${apiUrl}/program`
        console.log(requestUrl);
        const response = await fetch(requestUrl);
        console.log('response ok', response);
        const programs = await response.json();
        return programs;
  }
);


export const programSlice = createSlice({
    name: 'programs',
    initialState: [{id: 0,name: 'one',category: '',complete: false, workout:[], goal: []}],
    reducers: {

    }, extraReducers: {
        [getProgram.fulfilled]: (state, action) => {
            console.log(action.payload.programs);
            return action.payload.programs
        }
    }
})

export const { addWorkout, completeWorkout } = programSlice.actions
export default programSlice.reducer