import React, { useEffect } from 'react'
import ProgramChoice from '../components/ProgramComponents/ProgramChoice'
import { useDispatch, useSelector } from 'react-redux'
import { getProgram } from '../ReduxParts/programSlice'

const Program = () => {

  // const programs = ['stronk', 'fat', 'helth', 'ripd']

  const dispatch = useDispatch()
  const program = useSelector(state => {
    console.log(state.program[0].id);
    return state.program
  })
    
  const handleNewProgram = () => dispatch(getProgram())
  
    useEffect(()=> {
      handleNewProgram()
      },[])


  return (
    // <div>
    //     {/* <ProgramChoice programs={programs} />
    //     // show only program name and navigate to page with program's id */}
    // </div>
    <>
    {program && <h1>{program[0].name}</h1>}
    <button onClick={handleNewProgram}>new</button>
    </>
  )
}

export default Program