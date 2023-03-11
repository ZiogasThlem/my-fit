import { printUser, printUserTwice } from '../../ReduxParts/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import './profile.css'

const User = () => {

  const user = useSelector(state => state.user.value)
  const dispatch = useDispatch()
  return (
    <div className='User dropdown'>
       <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Profile Menu
      </button>
      <ul className="dropdown-menu dropdown-menu-dark">
          <li><button className="dropdown-item"
          aria-label="Show User" onClick={()=>dispatch(printUser())}
          >Show user</button></li>
          <li><button className="dropdown-item"
          aria-label="Show User Twice" onClick={()=>dispatch(printUserTwice())}
          >Show User Twicer</button></li>
          <li><button className="btn btn-danger dropdown-item">lel</button></li>
          <li><button className="dropdown-item">🏃‍♂️</button></li>
          <li><button className="dropdown-item">🚴‍♀️</button></li>
      </ul>
    </div>
  )
}

export default User