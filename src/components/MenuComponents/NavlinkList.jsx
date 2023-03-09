import React from 'react'
import { NavLink } from "react-router-dom";

const NavlinkList = () => {
  return (
    <ul>
        <li><NavLink to="/profile">Profile</NavLink></li>
        <li><NavLink to="/login">Programs</NavLink></li>
        <li><NavLink to="/register">Workouts</NavLink></li>
    </ul>
  )
}

export default NavlinkList