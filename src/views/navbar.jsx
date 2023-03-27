import React from 'react';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from "react"
import keycloak from "../keycloak"

const Navbar = () => {

  const [username , setUsername] = useState('')

  useEffect(()=>{
    try {
      if(username!=null){
         setUsername(keycloak.tokenParsed.preferred_username)
      }
    } catch (error) {
    }
},[username])

  const handleLogout = () => keycloak.logout()

  return (
    <nav>
      <img className='logo' src="../mefitlogo.png" alt="logo" width={50} height={50} />
      {username!='' && 
      <ul>
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
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>}
    </nav>
  );
};

export default Navbar;