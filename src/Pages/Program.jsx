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
        <button><NavLink to={'/workout'}>workouts</NavLink></button>
    </div>
  )
}

export default Program