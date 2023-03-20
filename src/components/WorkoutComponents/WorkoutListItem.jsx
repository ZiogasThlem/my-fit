import React from 'react'
import ExcerciseList from '../ExcerciseComponents/ExcerciseList'

const WorkoutListItem = () => {


  const exercises = ['bench','deadlift','squat','pullup']


  return (
    <div>
      <ExcerciseList exercises={exercises}/>
    </div>
  )
}

export default WorkoutListItem