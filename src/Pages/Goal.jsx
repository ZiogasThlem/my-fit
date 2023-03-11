import React from 'react'
import ActiveGoal from '../components/GoalComponents/ActiveGoal'
import GoalProgressBar from '../components/GoalComponents/GoalProgressBar'

const Goal = () => {
  return (
    <div>
        <ActiveGoal />
        <GoalProgressBar done="50"/>
    </div>
  )
}

export default Goal