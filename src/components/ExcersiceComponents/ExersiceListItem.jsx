import React from 'react'

const ExersiceListItem = ({exercise}) => {

  return (
    <li>{exercise}<button className='btn btn-success'>+</button></li>
  )
}

export default ExersiceListItem