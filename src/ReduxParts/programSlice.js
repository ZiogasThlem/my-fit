import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
const apiUrl = process.env.REACT_APP_API_URL;
const requestUrl = `${apiUrl}/program`
const headerS = {'Content-Type': 'application/json'
// ,'Access-Control-Allow-Origin': 'http://localhost:3000'
}



export const getProgram = createAsyncThunk(
    'programs/getProgram',
    async () => {
        const response = await fetch(requestUrl, {
          method: 'GET',
          headers: headerS
        });
        const programs = await response.json();
        return programs;
  }
);

export const addProgram = createAsyncThunk(
  'programs/addProgram',
  async (program, thunkAPI) => {
    try {
      const response = await fetch(requestUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(program),
      });
      const program = await response.json()
      return program;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const completeProgram = createAsyncThunk(
  'program/completeProgram',
  async ({ requestUrl, program }, { rejectWithValue }) => {
    try {
      const response = await fetch(requestUrl, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(program),
      });
      if (!response.ok) {
        throw new Error('Unable to complete program')
      }
      const program = await response.json()
      return program;
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)




export const programSlice = createSlice({
    name: 'programs',
    initialState: [
        {id: 0,name: 'one',category: '',complete: false, workout:[], goal: []}
    ],
    reducers: {

    },
    
    extraReducers: {
        [getProgram.fulfilled]: (state, action) => {
            return action.payload
        },
        [addProgram.fulfilled]: (state, action) => {
            state.push(action.payload.program)
        },
        [completeProgram.fulfilled]: (state, action) => {
            const index = state.findIndex(
                (program) => program.id === action.payload.program.id
            )
            state[index].complete = action.payload.program.complete
        }
    }
})

export const { } = programSlice.actions
export default programSlice.reducer