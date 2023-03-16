import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { completeGoal, doSomeProgress, subtractFromGoal } from '../../ReduxParts/goalSlice'

const ActiveGoal = () => {

    const goal = useSelector(state => state.goal)
    const dispatch = useDispatch()
    const name = goal.goalName[0]

  return (
    <div>
        {goal.percentage < 100.0 && <h1>{name} is not done</h1>}
        {goal.percentage === 100.0  &&
          <>
            <h1>{name} is done</h1>
            <button aria-label='Complete Goal'
            onClick={()=>dispatch(completeGoal())}
            >Complete Goal</button>
          </>
        }
        {goal.percentage >= 0 && <h1>{goal.percentage}%</h1>}
        <br></br>
        <button aria-label='Anounce Goal'
        onClick={()=>dispatch(doSomeProgress())}
        >add to goal</button>
        <button aria-label='Anounce Goal'
        onClick={()=>dispatch(subtractFromGoal())}
        >subtract to goal</button>
    </div>
  )
}

export default ActiveGoal