import React from 'react'
import './exer.css'

const Exercise = () => {

  return (
    <>
      <h2>Hoverable Dropdown</h2>
      <p>Move the mouse over the button to open the dropdown menu.</p>
      <div className="dropdown">
        <p className="dropbtn">Dropdown</p>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </>
  )
}

export default Exercise