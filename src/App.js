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
import KeycloakRoutes from './Routing/KeyCloakRoutes';
import { ROLES } from './consts/roles';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarTop />
        <Routes>
          <Route path="/" element={ <Login />} /> 
          <Route path="/menu" element={ 
            <KeycloakRoutes role={ROLES.User}>
              <Menu />
            </KeycloakRoutes>
          } /> 
          <Route path="/goal" element={ 
            <KeycloakRoutes role={ROLES.User || ROLES.Contributor || ROLES.Administrator}>
              <Goal />
            </KeycloakRoutes>
          }/> 
          <Route path="/profile" element={ 
            <KeycloakRoutes role={ROLES.Contributor || ROLES.Administrator}>
              <Profile />
            </KeycloakRoutes>
        }/> 
          <Route path="/program" element= {
            <KeycloakRoutes role={ROLES.User}>
                <Program />
            </KeycloakRoutes>
             } />
          <Route path="/workout" element= { <Workout />} />
          <Route path="*" element={<h1>Nothing here</h1>} />
        </Routes>
        <NavbarBottom />
      </div>
    </BrowserRouter>
  );
}

export default App;
