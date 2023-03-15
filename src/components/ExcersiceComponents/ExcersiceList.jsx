import React, { useState } from 'react'
import ExersiceListItem from './ExersiceListItem'

const ExcersiceList = ({exersices}) => {
  
  const [exersiceArray, SetExersiceArray] = useState([])

  const handleAdd = (temp_array, exersice) => {
    temp_array = exersiceArray
    temp_array.push(exersice)
    SetExersiceArray(temp_array)
    console.log(exersiceArray);
  }

  const exersiceList = exersices.map((exersice, index=exersices.indexOf(exersice)) => 
    <ExersiceListItem handleAdd={handleAdd}
    key={index} exercise={exersice} />
    )

  return (
        <ul>
          {exersiceList}
        </ul>
  )
}

export default ExcersiceList