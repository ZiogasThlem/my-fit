import { NavLink } from 'react-router-dom'
import './navbar.css'
import keycloak from '../../keycloak'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

const NavbarTop = () => {
  const user = useSelector(state => state.user)
  const [username , setUsername] = useState(user.value)

  useEffect(()=>{
    try {
      if(username!=null){
         setUsername(keycloak.tokenParsed.preferred_username)
      }
    } catch (error) {
    }
},[username]) // Empty dependencies means run only once

  const handleLogout = () => keycloak.logout()

  return (
    <nav className='NavbarTop'>
      {user != null && 
        <span>
          <p>MyFit 💪</p>
          {username != '' && <p>hello {username} </p>}
          <NavLink to="/menu">Menu</NavLink>
          <button className='btn btn-dark'
          onClick={handleLogout}
          >Logout 😭</button>
        </span>
      }
    </nav>
    
  )
}

export default NavbarTop