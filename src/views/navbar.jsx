import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
      <img src="../public/mefit logo.png" alt="logo" />
        <li>
        
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/goals">Goals</NavLink>
        </li>
        <li>
          <NavLink to="/workouts">Workouts</NavLink>
        </li>
        <li>
          <NavLink to="/exercises">Exercises</NavLink>
        </li>
        <li>
          <NavLink to="/programs">Programs</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;