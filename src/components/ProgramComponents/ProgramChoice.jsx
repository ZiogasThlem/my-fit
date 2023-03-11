import React from 'react'
import ProgramListItem from './ProgramListItem'


const ProgramChoice = () => {
  return (
    <div id='User'>
        <h1>Program Selection Menu</h1>
        <ul>
            <li><ProgramListItem/></li>
            <li><ProgramListItem/></li>
            <li><ProgramListItem/></li>
            <li><ProgramListItem/></li>
        </ul>
    </div>
  )
}

export default ProgramChoice