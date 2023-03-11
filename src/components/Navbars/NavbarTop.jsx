import { NavLink } from 'react-router-dom'
import './navbar.css'

const NavbarTop = () => {
  const user = 'Larry'

  return (
    <nav className='NavbarTop'>
      {user != null && 
        <span>
          <p>MyFit 💪</p>
          <NavLink to="/menu">Menu</NavLink>
          <button className='btn btn-dark'>Logout 😭</button>
        </span>
      }
    </nav>
    
  )
}

export default NavbarTop