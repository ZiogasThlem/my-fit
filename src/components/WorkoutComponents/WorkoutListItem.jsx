import React from 'react'
import ExcersiceList from '../ExcersiceComponents/ExcersiceList'

const WorkoutListItem = ({workout}) => {


  const exersices = ['bench','deadlift','squat','pullup']


  return (
    <div>
      <span>{workout}</span>
      <ExcersiceList exersices={exersices}/>
    </div>
  )
}

export default WorkoutListItem