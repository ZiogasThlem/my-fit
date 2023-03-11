import React from 'react'
import ProgramListItem from './ProgramListItem'

// ProgramListItem components into a programList
// array, map n stuff idk (same for all listItem to choice components)

const ProgramChoice = () => {
  return (
    <div id='User'>
        <h1>Program Selection Menu</h1>
        <ul>
          {/* {programList} */}
            <li><ProgramListItem/></li>
            <li><ProgramListItem/></li>
            <li><ProgramListItem/></li>
            <li><ProgramListItem/></li>
        </ul>
    </div>
  )
}

export default ProgramChoice