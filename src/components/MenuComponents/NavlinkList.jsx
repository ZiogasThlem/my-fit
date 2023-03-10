import React from 'react'
import { NavLink } from "react-router-dom";

const NavlinkList = () => {
  return (
    <ul>
        <li><NavLink to="/profile">Profile</NavLink></li>
        <li><NavLink to="/goal">Goal</NavLink></li>
        <li><NavLink to="/program">Programs</NavLink></li>
    </ul>
  )
}

export default NavlinkList