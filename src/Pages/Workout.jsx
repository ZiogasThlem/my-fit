import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Workout = () => {

  const navigate = useNavigate();

  return (
    <div>
        <ul>
            <li>workout1</li>
            <li>workout2</li>
            <li>workout3</li>
            <li>workout4</li>
        </ul>
        <button onClick={() => navigate(-1)}>Back</button>
        <button><NavLink to="/exercise">Exercises</NavLink></button>
    </div>
  )
}

export default Workout