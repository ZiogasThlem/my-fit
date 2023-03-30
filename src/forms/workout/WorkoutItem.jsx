const WorkoutItem = ({workout})=>{
    
    return(
    <>
    <td>{`${workout.name}`}</td>
    <td>{`${workout.type}`}</td>
    <td>{`${workout.exercise.length}`}</td>
    </>
    )
}
export default WorkoutItem