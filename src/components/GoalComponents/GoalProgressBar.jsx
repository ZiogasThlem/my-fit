import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { completeGoal,anounceGoal, doSomeProgress } from '../../ReduxParts/goalSlice'

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