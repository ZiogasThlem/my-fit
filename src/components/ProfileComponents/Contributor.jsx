import { useDispatch, useSelector } from 'react-redux'
import './profile.css'

const Contributor = () => {
    
    const user = useSelector(state => state.user.username)
    const program = useSelector(state => state.program)
    const isContributor = true


    // create state for workouts in a program
    const editWorkout = workout => {
        const new_workout = [...program.workouts, workout]
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