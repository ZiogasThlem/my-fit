import React from 'react'
import { useSelector } from "react-redux"

const GoalProgressBar = () => {
  
  const goal = useSelector(state => state.goal)

  return (
    <>
      {goal.percentage > 40 &&
      <div className='bar'>
      50%
      </div>}
    </>
    
  )
}

export default GoalProgressBar