import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = process.env.REACT_APP_API_URL;
const requestUrl = `${apiUrl}/goal`
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
                state.percentage = 0.0
                state.isComplete = true
                state.completedPrograms += 1
        },
        doSomeProgress: state => {
            state.isComplete = false
            if (state.percentage + 10.0 <= 100.0) state.percentage += 10.0
        },
        subtractFromGoal: state => {
            if (state.percentage >= 10.0) state.percentage -= 10.0
        },
        resetGoal: state => {
            if (state.goalName.length - 1 < state.completedPrograms)
            state.completedPrograms = 0
        }
    },
    extraReducers: {
      [getGoalsFromApi.fulfilled]: (state, action) => {
          return action.payload
      }
  }


})

export const { completeGoal, doSomeProgress, subtractFromGoal, resetGoal } = goalSlice.actions
export default goalSlice.reducer