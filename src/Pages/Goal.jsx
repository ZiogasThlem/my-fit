import React from 'react'
import ActiveGoal from '../components/GoalComponents/ActiveGoal'
import GoalProgressBar from '../components/GoalComponents/GoalProgressBar'

const Goal = () => {
  return (
    <div>
        <ActiveGoal />
        <GoalProgressBar />
    </div>
  )
}

export default Goal