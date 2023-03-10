import React from 'react'
import { NavLink } from 'react-router-dom'

const Program = () => {
  return (
    <div>
        <ul>
            <li>program1</li>
            <li>program2</li>
            <li>program3</li>
            <li>program4</li>
        </ul>
        <NavLink to={'/workout'}>workouts</NavLink>
    </div>
  )
}

export default Program