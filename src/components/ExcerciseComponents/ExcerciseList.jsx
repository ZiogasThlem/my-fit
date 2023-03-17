import React, { useId, useState } from 'react'
import ExerciseListItem from './ExerciseListItem'

const ExcerciseList = ({exercises}) => {

  
  const [exerciseArray, SetExerciseArray] = useState([])

  const handleAdd = exercise => {
    const temp_array = exerciseArray
    temp_array.push(exercise)
    SetExerciseArray(temp_array)
    console.log(exerciseArray);
  //doesnt work yet
  }

  const exerciseList = exercises.map((exercise) =>
    <ExerciseListItem handleAdd={handleAdd}
     key={exercises.indexOf(exercise)} exercise={exercise} />
    )

  return (
        <ul>
          {exerciseList}
        </ul>
  )
}

export default ExcerciseList