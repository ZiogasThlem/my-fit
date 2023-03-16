import ExerciseList from "../exercise/ExerciseList"

const WorkoutItem = ({workoutItemValue}) => {
    return(
        <>
        <li>Workout {workoutItemValue}</li>
        <ExerciseList/>
        </>
    )
}

export default WorkoutItem