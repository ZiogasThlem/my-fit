import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import keycloak from '../../keycloak';

const NavlinkList = () => {

  const user = useSelector(state => state.user)

  const [username , setUsername] = useState('')

  useEffect(()=>{
    try {
      if(username!=null){
         setUsername(keycloak.tokenParsed.preferred_username)
      }
    } catch (error) {
    }
},[username])

  return (
    <>
      <p>Hello {username}, nice to see you again.</p>
      <ul>
          <li><NavLink to="/profile">Profile</NavLink></li>
          <li><NavLink to="/goal">Goal</NavLink></li>
          <li><NavLink to="/program">Programs</NavLink></li>
      </ul>
    </>
  )
}

export default NavlinkList