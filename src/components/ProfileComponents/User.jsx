import { printUser, printUserTwice } from '../../ReduxParts/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import './profile.css'

const User = () => {

  const user = useSelector(state => state.user.value)
  const dispatch = useDispatch()
  return (
      <>
          <button
          aria-label="Show User" onClick={()=>dispatch(printUser())}
          >Show user</button>
          <button
          aria-label="Show User Twice" onClick={()=>dispatch(printUserTwice())}
          >Show User Twicer</button>
          <button className="btn btn-danger dropdown-item">lel</button>
          <button>🏃‍♂️</button>
          <button>🚴‍♀️</button>
      </>
  )
}

export default User