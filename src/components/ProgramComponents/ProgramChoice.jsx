import React, { useEffect } from 'react'
import ProgramListItem from './ProgramListItem'
import { useDispatch, useSelector } from 'react-redux'
import { getProgram } from '../../ReduxParts/programSlice'

// ProgramListItem components into a programList
// array, map n stuff idk (same for all listItem to choice components)

const ProgramChoice = ({programs}) => {

  const dispatch = useDispatch()
  const program = useSelector(state => {
    return state.program
  })
  const names = program.map( p =>  p.name)
  const handleNewProgram = () => dispatch(getProgram())
  
  useEffect(()=> {
    handleNewProgram()
    },[])

  const programList = programs.map( program => 
    <ProgramListItem key={programs.indexOf(program)} program={program} />
    )


  return (
    <div id='User'>
        <h1>Program Selection Menu</h1>
        <ul>
            {programList}
            {names}
        </ul>
    </div>
  )
}

export default ProgramChoice