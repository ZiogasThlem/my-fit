import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import WorkoutChoice from '../components/WorkoutComponents/WorkoutChoice';

const Workout = () => {

  const navigate = useNavigate();

  return (
    <div>
        <WorkoutChoice/>
        <button onClick={() => navigate(-1)}>Back</button>
    </div>
  )
}

export default Workout