import React from 'react'
import ExcersiceList from '../ExcersiceComponents/ExcersiceList'

const WorkoutListItem = () => {
  const exersices = ['1','2','3']
  return (
    <div>
      <header>Workout</header>
      <ExcersiceList exersices={exersices}/>
    </div>
  )
}

export default WorkoutListItem