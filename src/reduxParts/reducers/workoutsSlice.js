import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";

const apiUrl = process.env.REACT_APP_API_LOCAL_URL;
const apiKey = process.env.REACT_APP_API_LOCAL_KEY;

const workoutsAdapter = createEntityAdapter();

// const workoutsAdapter = createEntityAdapter({
//     selectId:(workout)=>workout.id
// });
/**
 * export const selectItemsByIds = createAsyncThunk(
  'items/selectItemsByIds',
  async (ids) => {
    const response = await fetch(`/api/items?ids=${ids.join(',')}`);
    const data = await response.json();
    return data;
  }
);
 */

// export const selectworkoutsByIds = createAsyncThunk("workout/selectworkoutsByIds", async (state,ids) => {
//   const selectedItems = [];
//   console.log(ids);
//   ids.forEach((id) => {
//     const item = state.workouts.workout.find((item) => item.id === id);
//     if (item) {
//       selectedItems.push(item);
//     }
//   });
//   return selectedItems;
// });


export const fetchWorkouts = createAsyncThunk("workout/fetchWorkouts", async () => {
  const response = await fetch(`${apiUrl}workout`);
  const data = await response.json();
  return data;
});

export const addWorkout = createAsyncThunk("workout/addWorkout", async (workout) => {
  
  
  const response = await fetch(`${apiUrl}workout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'x-api-key':apiKey
    },
    body: JSON.stringify(workout),
  });
  const data = await response.json();
  return data;
});

export const updateWorkout = createAsyncThunk("workout/updateWorkout", async (workout) => {
  const response = await fetch(`${apiUrl}workout/${workout.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      'x-api-key':apiKey
    },
    body: JSON.stringify(workout),
  });
  const data = await response.json();
  return data;
});

export const deleteWorkout = createAsyncThunk("workout/deleteWorkout", async (id) => {
  const response = await fetch(`${apiUrl}workout${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
});




// const initialState = workoutsAdapter.getInitialState( {
//     workouts:[],
//     status: "idle",
//     error: null,
  
// })
  // workout: [],
  // status: "idle",
  // error: null,


// export const {
//     selectAll: selectAllAworkouts,
//     selectById: selectworkoutById,
//     selectIds: selectworkoutIds,
//   } = booksAdapter.getSelectors((state) => state.workout);

const workoutSlice = createSlice({
  name: "workout",
  initialState :workoutsAdapter.getInitialState(
    {
        workout:{
        workouts:[],
        status:'idle',
        error:null
        }
    }
  ),
  reducers:{
    selectWorkoutsByIds :(state, action) =>{
      console.log(action.payload);
      console.log(state.workout);
       return state.workout.workouts.filter((workout) => action.payload.includes(workout.id))
      },
    selectWorkoutById:workoutsAdapter.getSelectors().selectById,
    
  }
      
  
  ,
  extraReducers: (builder) => {
    builder
      .addCase(fetchWorkouts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchWorkouts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.workout = action.payload;
      })
      .addCase(fetchWorkouts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // .addCase(selectworkoutsByIds.pending,(state)=>{
      //   console.log('pending');
      //   state.status = "loading";
      //   state.error = null;
      // })
      // .addCase(selectworkoutsByIds.fulfilled, (state, action) => {
      //   console.log('fulfilled');
      //   state.status = "succeeded";
      //   state.workout = action.payload;
      // })
      // .addCase(selectworkoutsByIds.rejected, (state, action) => {
      //   console.log('failed');
      //   state.status = "failed";
      //   state.error = action.error.message;
      // })
      .addCase(addWorkout.fulfilled, (state, action) => {
        state.workout.push(action.payload);
      })
      .addCase(updateWorkout.fulfilled, (state, action) => {
        const index = state.workout.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {selectworkoutById
          state.workout[index] = action.payload;
        }
      })
      .addCase(deleteWorkout.fulfilled, (state, action) => {
        state.workout = state.workout.filter((item) => item.id !== action.payload);
      })
      .addCase(selectWorkoutsByIds, (state,ids) =>{
        return state.workout.workouts.filter((workout) => ids.includes(workout.id))});
  },
});

// export const selectworkoutById = (state, id) => state.workout.workout.find((item) => item.id === id);

// export const selectworkoutsByIds = (state, ids) =>
//   state.workout.workout.filter((workout) => ids.includes(workout.id));

export const selectWorkoutsStatus = (state) => state.workout.status;

export const selectWorkoutsError = (state) => state.workout.error;

export const{selectWorkoutsByIds, selectworkoutById } =workoutSlice.actions;

export default workoutSlice.reducer;