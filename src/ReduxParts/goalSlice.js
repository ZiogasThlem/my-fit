import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = process.env.REACT_APP_API_URL;
const requestUrl = `${apiUrl}goal`
const headerS = {'Content-Type': 'application/json'}

export const getGoalsFromApi = createAsyncThunk(
  'goals/getGoalFromApi',
  async () => {
    const response = await fetch(requestUrl);
    const goals = await response.json();
    return goals;
  }
);

export const goalSlice = createSlice({
    name: 'goals',
    initialState: [{
        name: '',
        profile: [],
        program: [], 
        completed_programs: 0,
        total_programs: 0,
        complete: false,
        start_date: Date(),
        end_date: Date()
    }],
    reducers: {
        completeGoal: state => {

        }
    },
    extraReducers: {
      [getGoalsFromApi.fulfilled]: (state, action) => {
          return action.payload
      }
  }


})

export const { completeGoal } = goalSlice.actions
export default goalSlice.reducer