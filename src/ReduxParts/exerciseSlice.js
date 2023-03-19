import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const apiUrl = process.env.API_URL


export const getExersiceAsync = createAsyncThunk(
  'exersice/getExersiceAsync', async () => {
    const response = await fetch(`${apiUrl}exercise`);
    if (response.ok){
        console.log("ok");
        const exersice = await response.json();
        return exersice;
    }
  }
);

const initialState2 = [ 
    { name: 'exercise1', desc: 'none', complete: true }
]

export const exerciseSlice = createSlice({
    name: 'exersice',
    initialState: initialState2,

    reducers: {
        modifyExersice: (state) => 
            state.complete ?
                state.complete = false :
                state.complete = true
    },
    extraReducers: {
        [getExersiceAsync.fulfilled]: (action) => {
            return action.payload
        }
    }
})

export const { modifyExersice } = exerciseSlice.actions
export default exerciseSlice.reducer