import { printUser, printUserTwice } from '../../ReduxParts/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import './profile.css'
import { addWorkout, completeWorkout } from '../../ReduxParts/programSlice'

const User = () => {

  const user = useSelector(state => state.user.value)
  const userDispatch = useDispatch()
  const program = useSelector(state => state.program)
  const programDispatch = useDispatch()

  const w = {
    'run':false
  }

  return (
      <>
          <button
          aria-label="Show User" onClick={()=>userDispatch(printUser())}
          >Show user</button>
          <button
          aria-label="Show User Twice" onClick={()=>userDispatch(printUserTwice())}
          >Show User Twicer</button>
          <button className="btn btn-danger"
          aria-label="Add Workout Run" onClick={()=>programDispatch(addWorkout(w))}
          >🏃‍♂️</button>
          <button
          aria-label="Complete Workout Run" onClick={()=>programDispatch(completeWorkout(w))}
          >🚴‍♀️</button>
      </>
  )
}

export default User