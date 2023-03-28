import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
 
  return (
    <nav>
      
      <ul>
      <img className='logo' src="../mefitlogo.png" alt="logo" width={50} height={50} />
        <li>
          <NavLink to="/profile">My Profile</NavLink>
        </li>
        <li>
          <NavLink to="/goals">Manage Goals</NavLink>
        </li>
        <li>
          <NavLink to="/workouts">Manage Workouts</NavLink>
        </li>
        <li>
          <NavLink to="/exercises">Manage Exercises</NavLink>
        </li>
        <li>
          <NavLink to="/programs">Manage Programs</NavLink>
        </li>
        <li>
          <NavLink to="/goal/:id/workouts">My Workouts</NavLink>
        </li>
        <li>
          <NavLink to="goal/:id/exercises">My Exercises</NavLink>
        </li>
        <li>
          <NavLink to="/goal/:id/programs">My Programs</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;