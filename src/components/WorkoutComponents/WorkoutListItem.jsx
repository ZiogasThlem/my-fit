import React from 'react'
import ExcerciseList from '../ExcersiceComponents/ExcerciseList'

const WorkoutListItem = ({workout}) => {


  const exersices = ['bench','deadlift','squat','pullup']


  return (
    <div>
      <span>{workout}</span>
      <ExcerciseList exersices={exersices}/>
    </div>
  )
}

export default WorkoutListItem