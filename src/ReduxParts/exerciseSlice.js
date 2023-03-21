import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const apiUrl = process.env.REACT_APP_API_URL


export const getExerciseAsync = createAsyncThunk(
  'exercise/getExerciseAsync', async () => {
    const response = await fetch(`${apiUrl}exercise`);
    const exercise = await response.json();
    return exercise;
    }
);

const initialState2 = [ 
    { id: 0, name: 'exercise1', desc: 'none',
    tmg:'', repetitions: 0, img: '', vid: '',
    workout: [], complete: true }
]

export const exerciseSlice = createSlice({
    name: 'exercise',
    initialState: initialState2,

    reducers: {
        modifyExercise: (state) => 
            state.complete ?
                state.complete = false :
                state.complete = true
    },
    extraReducers: {
        [getExerciseAsync.fulfilled]: (state, action) => {
        return action.payload
        }
    }
})

export const { modifyExercise } = exerciseSlice.actions
export default exerciseSlice.reducer