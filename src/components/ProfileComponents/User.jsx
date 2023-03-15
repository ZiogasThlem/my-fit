import { printUser, printUserTwice } from '../../ReduxParts/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import './profile.css'
import { addWorkout, completeWorkout } from '../../ReduxParts/programSlice'
import { useState } from 'react'

const User = () => {

  const user = useSelector(state => state.user.value)
  const userDispatch = useDispatch()
  const program = useSelector(state => state.program)
  const programDispatch = useDispatch()
  const [disabled, setDisabled] = useState()
  const w = ['run','flex','dive']

  return (
      <>
          <button
          aria-label="Show User" onClick={()=>userDispatch(printUser())}
          >Show user</button>
          <button className="btn btn-danger"
          aria-label="Add Workout Run" onClick={()=>programDispatch(
            addWorkout(w[program.count]))}
          >🏃‍♂️</button>
          <button
          aria-label="Complete Workout Run" onClick={()=>programDispatch(completeWorkout(w))}
          >🚴‍♀️</button>
      </>
  )
}

export default User