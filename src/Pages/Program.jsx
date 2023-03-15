import React from 'react'
import ProgramChoice from '../components/ProgramComponents/ProgramChoice'

const Program = () => {

  const programs = ['stronk', 'fat', 'helth', 'ripd']


  return (
    <div>
        <ProgramChoice programs={programs}/>
    </div>
  )
}

export default Program