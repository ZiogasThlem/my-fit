import React from 'react'

const ExersiceListItem = ({exercise, handleAdd}) => {

  const onClick = exercise => {
    handleAdd(exercise)
  }

  return (

      <li>{exercise}<button onClick={onClick} 
        className='btn btn-success'
        > + </button></li>

  )
}

export default ExersiceListItem