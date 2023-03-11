import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { completeGoal,anounceGoal, doSomeProgress } from '../../ReduxParts/goalSlice'

const ActiveGoal = () => {

    const goal = useSelector(state => state.goal)
    const dispatch = useDispatch()

  return (
    <div>
        <label>{goal.goalName}</label>
        <button aria-label='Complete Goal'
        onClick={()=>dispatch(completeGoal())}
        >Complete Goal</button>
        <button aria-label='Anounce Goal'
        onClick={()=>dispatch(doSomeProgress())}
        >Make Progress for Goal</button>
        <button aria-label='Anounce Goal'
        onClick={()=>dispatch(anounceGoal())}
        >Anounce Goal</button>

    </div>
  )
}

export default ActiveGoal