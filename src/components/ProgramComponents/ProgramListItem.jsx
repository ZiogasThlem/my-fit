import React from 'react'
import WorkoutChoice from '../WorkoutComponents/WorkoutChoice'
import { useDispatch, useSelector } from 'react-redux'

const ProgramListItem = () => {

  // to be changed to recieve from api
  // const workouts = ['legs','arms', 'back', 'chest']

  const dispatch = useDispatch()
  const workout = useSelector(state => state.workout)

  

  return (
    <div id = "program">
      <WorkoutChoice workouts={workout}/>
    </div>
  )
}

export default ProgramListItem