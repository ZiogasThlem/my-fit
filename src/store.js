import { configureStore } from '@reduxjs/toolkit';
import exerciseReducer from './reducers/exercise';


const store = configureStore({
  reducer: {
    exercise: exerciseReducer,
    
  },
});

export default store;