import { useDispatch, useSelector } from 'react-redux'
import './profile.css'

const Admin = () => {

    const isAdmin = true
    const user = useSelector(state => state.user.value)

    const deleteUser = user => {
        //user = new_user
        console.log("user");
    }

    return (
        <div className='Admin'>
            { isAdmin && <button
            onClick={(user)=> deleteUser(user)}
            >Edit Client Info</button>}
        </div>
  )
}

export default Admin