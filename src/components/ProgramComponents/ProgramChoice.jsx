import React from 'react'
import ProgramListItem from './ProgramListItem'


const ProgramChoice = () => {
  return (
    <div className='dropdown' id='User'>
        <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Program Choice
        </button>
        <ul className="dropdown-menu dropdown-menu-dark">
            <li class="dropdown-item"><ProgramListItem/></li>
            <li class="dropdown-item"><ProgramListItem/></li>
            <li class="dropdown-item"><ProgramListItem/></li>
            <li class="dropdown-item "><ProgramListItem/></li>
        </ul>
    </div>
  )
}

export default ProgramChoice