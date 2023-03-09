import './profile.css'

const Admin = () => {
    const isAdmin = false
    return (
        <div className='Admin'>
            { isAdmin &&
            <ul>
                <li><button>A1</button></li>
                <li><button>A2</button></li>
                <li><button>A3</button></li>
                <li><button>A4</button></li>
            </ul>}
        </div>
  )
}

export default Admin