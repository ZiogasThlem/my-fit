import React from 'react'
import { useSelector } from "react-redux"

const GoalProgressBar = () => {
  
  const goal = useSelector(state => state.goal)

  return (
    <>
      <h1>programs competed: {goal.completedPrograms} </h1>
    </>
    
  )
}

export default GoalProgressBar