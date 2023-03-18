import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const apiUrl = process.env.API_URL


export const getExersiceAsync = createAsyncThunk(
  'exersice/getExersiceAsync', async () => {
    const response = await fetch(`${apiUrl}exercise`);
    if (response.ok){
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
    // : {
    //     id: 0,
    //     name: 'first',
    //     complete: false
    // },
    reducers: {
        modifyExersice: (state) => 
            state.complete ?
                state.complete = false :
                state.complete = true
    },
    extraReducers: {
        [getExersiceAsync.fulfilled]: (state, action) => {
            state.name = action.payload.name
            state.complete = action.payload.complete
        }
    }
})

export const { modifyExersice } = exerciseSlice.actions
export default exerciseSlice.reducer