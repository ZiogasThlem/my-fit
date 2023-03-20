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
import store from './ReduxParts/store';

function App() {
  return (
    <Provider store={store}>

    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/goals" element={<Goals/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/workout" element={<Workout/>}/>
        <Route path="/program" element={<Program/>}/>
      </Routes>  
    </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
