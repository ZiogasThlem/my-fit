import React from 'react'

const ExerciseListItem = ({exercise, handleAdd}) => {

  const onClick = exercise => {
    handleAdd(exercise.target.value)
  }

  return (

    <button onClick={onClick} 
      className='btn btn-success'><li>{exercise}</li>
    </button>

  )
}

export default ExerciseListItem