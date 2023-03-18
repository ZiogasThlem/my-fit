import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import WorkoutChoice from '../components/WorkoutComponents/WorkoutChoice';

const Workout = () => {

  const workouts = ['legs','arms', 'back', 'chest']

  return (
    <div>
        <WorkoutChoice workouts={workouts}/>
    </div>
  )
}

export default Workout