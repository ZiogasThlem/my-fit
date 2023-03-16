import WorkoutList from "../workout/WorkoutList"

const ProgramItem = ({programItemValue})=>{
    
    
    return(
        <>
        <li>
            Program {programItemValue}
            <WorkoutList/>
        </li>
        </>
    )

}

export default ProgramItem