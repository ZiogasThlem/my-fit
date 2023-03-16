import React, { useState } from 'react'
import ExerciseListItem from './ExerciseListItem'

const ExcerciseList = ({exercises}) => {
  
  const [exerciseArray, SetExerciseArray] = useState([])

  const handleAdd = exercise => {
    const temp_array = exerciseArray
    temp_array.push(exercise)
    SetExerciseArray(temp_array)
    console.log(exerciseArray);
  }

  const exerciseList = exercises.map((exercise, index = exercises.indexOf(exercise)) =>
    <ExerciseListItem handleAdd={handleAdd}
                      key={index} exercise={exercise} />
    )

  return (
        <ul>
          {exerciseList}
        </ul>
  )
}

export default ExcerciseList