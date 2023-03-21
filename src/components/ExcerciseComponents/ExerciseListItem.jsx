import React from 'react'

const ExerciseListItem = ({exercise, handleAdd}) => {

  // const onClick = event => {
  //   event.preventDefault()
  //   console.log(event.target.value);
  //   handleAdd(event.target.value)
  // }



  return (

    <button 
      className='btn btn-success' 
      exercise={exercise}>
        {exercise}
    </button>

  )
}

export default ExerciseListItem