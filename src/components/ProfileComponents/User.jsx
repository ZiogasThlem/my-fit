import { printUser, printUserTwice } from '../../ReduxParts/userSlice'
import './profile.css'
import { useSelector, useDispatch } from 'react-redux'

const User = () => {

  const user = useSelector(state => state.user.value)
  const dispatch = useDispatch()
  return (
    <div className='User'>
      <ul>
          <li><button
          aria-label="Show User" onClick={()=>dispatch(printUser())}
          >show user</button></li>
          <li><button
          aria-label="Show User Twice" onClick={()=>dispatch(printUserTwice())}
          >show user</button></li>
          <li><button>💪</button></li>
          <li><button>🏃‍♂️</button></li>
          <li><button>🚴‍♀️</button></li>
      </ul>
    </div>
  )
}

export default User