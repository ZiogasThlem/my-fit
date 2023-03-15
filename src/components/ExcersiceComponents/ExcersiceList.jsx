import React from 'react'
import ExersiceListItem from './ExersiceListItem'

const ExcersiceList = ({exersices}) => {
  
  const exersiceList = exersices.map((exersice, index=exersices.indexOf(exersice)) => 
    <ExersiceListItem key={index} exercise={exersice} />
    )

  return (
        <ol>
          {exersiceList}
        </ol>
  )
}

export default ExcersiceList