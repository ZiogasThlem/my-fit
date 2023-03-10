import React from 'react'
import { NavLink } from 'react-router-dom'
import ProgramChoice from '../components/ProgramComponents/ProgramChoice'

const Program = () => {
  return (
    <div>
        <ProgramChoice />
        <NavLink to={'/workout'}>workouts</NavLink>
    </div>
  )
}

export default Program