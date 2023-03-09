import './navbar.css'

const NavbarTop = () => {
  const user = 'Larry'

  return (
    <nav>
      {user != null && 
        <span>
          <p>MyFit 💪</p>
          <p>MyFit 💪</p>
          <p>MyFit 💪</p>
        </span>
      }
    </nav>
    
  )
}

export default NavbarTop