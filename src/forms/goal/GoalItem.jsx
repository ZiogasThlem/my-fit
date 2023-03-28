const GoalItem = ({goal})=>{

    return(
    <>
        <td>{goal.name}</td>
        <td>{goal.start_date}</td>
        <td>{goal.end_date}</td>
        <td>{goal.total_programs}</td>
    </>
    )
}
export default GoalItem