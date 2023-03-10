import React from 'react'
import ActiveGoal from '../components/GoalComponents/ActiveGoal'

const Goal = () => {
  return (
    <div>
        <ul>
            <li id="list_item">list_item1</li>
            <li id="list_item">list_item2</li>
            <li id="list_item">list_item3</li>
            <li id="list_item">list_item4</li>
        </ul>
        <ActiveGoal />

    </div>
  )
}

export default Goal