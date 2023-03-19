import { printUser, printUserTwice } from '../../ReduxParts/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import './profile.css'
import { useEffect, useState } from 'react'
import keycloak from '../../keycloak'

const User = () => {

  const user = useSelector(state => state.user)
  const [username, setUsername] = useState(user.username)

  useEffect(()=>{
    if(username!=null){
      setUsername(keycloak.tokenParsed.preferred_username)
    }
},[])

  const userDispatch = useDispatch()
  const program = useSelector(state => state.program)
  const programDispatch = useDispatch()
  const w = ['run','flex','dive']



  return (
      <>
        {username!='' && <h1>{username}'s profile</h1>}
          <button
          aria-label="Show User" onClick={() =>
            userDispatch(printUser(keycloak.tokenParsed.preferred_username))}
          >Show user</button>
          {/* <button className="btn btn-danger"
          aria-label="Add Workout Run" onClick={()=>programDispatch(
            addWorkout(w[program.count]))}
          >🏃‍♂️</button>
          <button
          aria-label="Complete Workout Run" onClick={()=>programDispatch(completeWorkout(w))}
          >🚴‍♀️</button> */}
      </>
  )
}

export default User