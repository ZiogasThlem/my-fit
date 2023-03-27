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
import ExerciseSelect from './forms/exercise/ExerciseSelect';
import WorkoutFormAdd from './forms/workout/WorkoutFormAdd';
import WorkoutGetAll from './forms/workout/WorkoutGetAll';
import WorkoutEdit from './forms/workout/WorkoutEdit';
import ProgramFormAdd from './forms/program/ProgramFormAdd';
import ProgramGetAll from './forms/program/ProgramGetAll';
import ProgramEdit from './forms/program/ProgramEdit';
import Navbar from './views/navbar';



function App() {
  return (
    <Provider store={store}>

    <BrowserRouter>
    <div className="App">
    <Navbar /> {/* Add Navbar component here */}
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
        <Route path="/exercise/select" element={<ExerciseSelect/>}/>
        <Route path="/workouts" element={<WorkoutGetAll/>}/>
        <Route path="/workout/add" element={<WorkoutFormAdd/>}/>
        <Route path="/workout/update/:id" element={<WorkoutEdit/>}/>
        <Route path="/programs" element={<ProgramGetAll/>}/>
        <Route path="/program/add" element={<ProgramFormAdd/>}/>
        <Route path="/program/update/:id" element={<ProgramEdit/>}/>
        
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
