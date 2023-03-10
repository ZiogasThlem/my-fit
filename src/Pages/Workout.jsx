import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Workout = () => {

  const navigate = useNavigate();

  return (
    <div>
        <ul>
            <li>workout1<button>+</button></li>
            <li>workout2<button>+</button></li>
            <li>workout3<button>+</button></li>
            <li>workout4<button>+</button></li>
        </ul>
        <button onClick={() => navigate(-1)}>Back</button>
        <NavLink to="/exercise">Exercises</NavLink>
    </div>
  )
}

export default Workout