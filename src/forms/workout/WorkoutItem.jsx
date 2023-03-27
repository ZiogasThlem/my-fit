const WorkoutItem = ({workout})=>{
    
    return(
    <>
    <td>{`${workout.name}`}</td>
    <td>{`${workout.type}`}</td>
    <td>{`${workout.exercise}`}</td>
    </>
    )
}
export default WorkoutItem