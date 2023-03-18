import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
const apiUrl = process.env.API_URL

export const getProgram = createAsyncThunk(
  'programs/getProgram',
  async () => {
    const response = await fetch(`${apiUrl}program`);
    if (response.ok){
        console.log('response ok');
        const programs = await response.json();
        return [programs];
    }
  }
);


export const programSlice = createSlice({
    name: 'programs',
    initialState: [{name: 'one',complete: false},
    {name: 'two',complete: false}],
    reducers: {

    }, extraReducers: {
        [getProgram.fulfilled]: (state, action) => {
            return action.payload.programs
        }
    }
})

export const { addWorkout, completeWorkout } = programSlice.actions
export default programSlice.reducer