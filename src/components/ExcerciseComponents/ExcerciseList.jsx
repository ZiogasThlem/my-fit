import React, { useEffect, useState } from 'react'
import ExerciseListItem from './ExerciseListItem'
import { useDispatch, useSelector } from 'react-redux'
import { getExerciseAsync } from '../../ReduxParts/exerciseSlice'

const ExcerciseList = () => {

  
  // const [exerciseArray, SetExerciseArray] = useState([])

  // const handleAdd = exercise => {
  //   const temp_array = [...exerciseArray,exercise]
  //   SetExerciseArray(temp_array)
  //   console.log(exerciseArray);
  // //doesnt work yet
  // }


  const exercisess = useSelector(state => state.exercise)
  const dispatch = useDispatch()
  const names = exercisess.map(e=> e.name)

  const handleGetExercises = () => dispatch(getExerciseAsync())


  useEffect(()=> {
    handleGetExercises()
  },[])


  const exerciseList = names.map((exercise) =>
    <ExerciseListItem 
    //handleAdd={handleAdd}
     key={names.indexOf(exercise)} exercise={exercise} />
    )
  


  return (
        <ul>
          {exerciseList}
        </ul>
  )
}

export default ExcerciseList