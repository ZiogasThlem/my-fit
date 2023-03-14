import { NavLink } from 'react-router-dom'
import './navbar.css'
import keycloak from '../../keycloak'
import { useDispatch, useSelector } from 'react-redux'

const NavbarTop = () => {
  const user = useSelector(state => state.user.value)
  const userDispatch = useDispatch()

  const handleLogout = () => keycloak.logout()

  return (
    <nav className='NavbarTop'>
      {user != null && 
        <span>
          <p>MyFit 💪</p>
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