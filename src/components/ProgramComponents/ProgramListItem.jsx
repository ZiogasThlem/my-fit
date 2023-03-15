import React from 'react'
import WorkoutChoice from '../WorkoutComponents/WorkoutChoice'

const ProgramListItem = ({program}) => {

  const workouts = ['legs','arms', 'back', 'chest']

  return (
    <div id = "program">
      <header>{program}</header>
      <WorkoutChoice workouts={workouts}/>
    </div>
  )
}

export default ProgramListItem