import React from 'react'
import WorkoutChoice from '../WorkoutComponents/WorkoutChoice'

const ProgramListItem = ({program}) => {

  // to be changed to recieve from api
  const workouts = ['legs','arms', 'back', 'chest']

  return (
    <div id = "program">
      <header>{program}</header>
      <WorkoutChoice workouts={workouts}/>
    </div>
  )
}

export default ProgramListItem