import { useDispatch, useSelector } from 'react-redux'
import './profile.css'

const Contributor = () => {
    
    const user = useSelector(state => state.user.value)
    const isContributor = true


    const editWorkout = workout => {
        //workout = new_workout
        console.log("workout");
    }
    return (
        <div className='Contributor'>
        {isContributor && <button
        onClick={() => editWorkout()}
        >Edit Workout</button>}
        </div>
    )
}

export default Contributor