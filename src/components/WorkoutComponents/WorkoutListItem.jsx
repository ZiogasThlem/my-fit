import React from 'react'
import ExcerciseList from '../ExcerciseComponents/ExcerciseList'

const WorkoutListItem = ({workout}) => {


  const exercises = ['bench','deadlift','squat','pullup']


  return (
    <div>
      <span>{workout}</span>
      <ExcerciseList exercises={exercises}/>
    </div>
  )
}

export default WorkoutListItem