import React from 'react'
import ProgramChoice from '../components/ProgramComponents/ProgramChoice'

const Program = () => {

  const programs = ['stronk', 'fat', 'helth', 'ripd']


  return (
    <div>
        <ProgramChoice programs={programs} />
        // show only program name and navigate to page with program's id
    </div>
  )
}

export default Program