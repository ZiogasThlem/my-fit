import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Goals from './views/Goals'
import Login from './views/Login'
import Profile from './views/Profile'
import Workout from './views/Workout';
import Program from './views/Program';
import { Provider} from 'react-redux';
// import { Store } from '@reduxjs/toolkit';
import store from './reduxParts/store';
import Exercise from './views/Exercise';

import ExerciseGetAll from './forms/exercise/ExerciseGetAll';
import ExerciseEdit from './forms/exercise/ExerciseEdit';
import ExerciseFormAdd from './forms/exercise/ExerciseFormAdd';



function App() {
  return (
    <Provider store={store}>

    <BrowserRouter>
    <div className="App">
        
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/goals" element={<Goals/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/workout" element={<Workout/>}/>
        <Route path="/program" element={<Program/>}/>
        <Route path="/exercise" element={<Exercise/>}/>
        <Route path="/exercises" element={<ExerciseGetAll/>}/>
        <Route path="/exercise/add" element={<ExerciseFormAdd/>}/>
        <Route path="/exercise/update/:id" element={<ExerciseEdit/>}/>
        
        {/* <Route path="/exerciseAdd" element={<ExerciseFormAdd/>}/>
        <Route path="/exercise/update" element={<ExerciseListFormUpdate/>}/>
        <Route path="/exercise/update/:id" element={<ExerciseItemUpdate/>}/>
        <Route path="/workout/update" element={<WorkoutListFormUpdate/>}/> */}
      </Routes>  
    </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
