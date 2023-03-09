import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Pages/Login';
import Menu from './Pages/Menu';
import Profile from './Pages/Profile';
import Register from './Pages/Register';
import NavbarTop from './components/Navbars/NavbarTop';
import NavbarBottom from './components/Navbars/NavbarBottom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarTop />
        <Routes>
          <Route path="/" element={ <Login />} /> 
          <Route path="/register" element={ <Register />} /> 
          <Route path="/menu" element={ <Menu />} /> 
          <Route path="/profile" element={ <Profile />} /> 
        </Routes>
        <NavbarBottom />
      </div>
    </BrowserRouter>
  );
}

export default App;
