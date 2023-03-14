import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Pages/Login';
import Menu from './Pages/Menu';
import Profile from './Pages/Profile';
import NavbarTop from './components/Navbars/NavbarTop';
import NavbarBottom from './components/Navbars/NavbarBottom';
import Goal from './Pages/Goal';
import Workout from './Pages/Workout';
import Program from './Pages/Program';
import Exercise from './Pages/Exercise';
import KeyCloakRoutes from './Routing/KeyCloakRoutes'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarTop />
        <Routes>
          <Route path="/login" element={ <Login />} /> 
          <Route path="/menu" element={ <Menu />} /> 
          <Route path="/goal" element={ <Goal />} /> 
          <Route path="/profile" element={ <Profile />} /> 
          <Route path="/workout" element= { <Workout />} />
          <Route path="/program" element= { <Program />} />
          <Route path="/exercise" element= { <Exercise />} />
        </Routes>
        <NavbarBottom />
      </div>
    </BrowserRouter>
  );
}

export default App;
