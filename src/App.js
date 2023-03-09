import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Pages/Login';
import Menu from './Pages/Menu';
import Profile from './Pages/Profile';
import Register from './Pages/Register';
import Navbar_top from './components/Navbar_top';
import Navbar_bottom from './components/Navbar_bottom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar_top />
        <Routes>
          <Route path="/" element={ <Login />} /> 
          <Route path="/register" element={ <Register />} /> 
          <Route path="/menu" element={ <Menu />} /> 
          <Route path="/profile" element={ <Profile />} /> 
        </Routes>
        <Navbar_bottom />
      </div>
    </BrowserRouter>
  );
}

export default App;
