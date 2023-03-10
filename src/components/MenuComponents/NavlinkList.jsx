import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";

const NavlinkList = () => {

  const user = useSelector(state => state.user)

  return (
    <>
      <p>Hello {user.value}, nice to see you again.</p>
      <ul>
          <li><NavLink to="/profile">Profile</NavLink></li>
          <li><NavLink to="/goal">Goal</NavLink></li>
          <li><NavLink to="/program">Programs</NavLink></li>
      </ul>
    </>
  )
}

export default NavlinkList