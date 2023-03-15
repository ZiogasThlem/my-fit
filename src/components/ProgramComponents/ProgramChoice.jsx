import React from 'react'
import ProgramListItem from './ProgramListItem'

// ProgramListItem components into a programList
// array, map n stuff idk (same for all listItem to choice components)

const ProgramChoice = ({programs}) => {

  const programList = programs.map( program => 
    <ProgramListItem key={programs.indexOf(program)} program={program} />
    )


  return (
    <div id='User'>
        <h1>Program Selection Menu</h1>
        <ul>
            {programList}
        </ul>
    </div>
  )
}

export default ProgramChoice