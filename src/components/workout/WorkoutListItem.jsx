// import ExerciseList from "../exercise/ExerciseList"

// const WorkoutItem = ({workoutItemValue}) => {
//     return(
//         <>
//         <li>Workout {workoutItemValue}</li>
//         <ExerciseList/>
//         </>
//     )
// }

// export default WorkoutItem

import React from 'react'
import ExcerciseList from '../exercise/ExerciseList'


const WorkoutListItem = ({workout}) => {


  const exercises = ['bench','deadlift','squat','pullup']


  return (
    <div>
      <span>{workout}</span>
      <ExcerciseList exercises={exercises}/>
    </div>
  )
}

export default WorkoutListItem
