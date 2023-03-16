import React, { useState } from 'react'
import ExersiceListItem from './ExersiceListItem'

const ExcerciseList = ({exercises}) => {
  
  const [exerciseArray, SetExerciseArray] = useState([])

  const handleAdd = exercise => {
    const temp_array = exerciseArray
    temp_array.push(exercise)
    SetExerciseArray(temp_array)
    console.log(exerciseArray);
  }

  const exerciseList = exercises.map((exercise, index=exercises.indexOf(exercise)) =>
    <ExersiceListItem handleAdd={handleAdd}
    key={index} exercise={exercise} />
    )

  return (
        <ul>
          {exerciseList}
        </ul>
  )
}

export default ExcerciseList