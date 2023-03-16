import ExerciseList from "../exercise/ExerciseList"
import WorkoutItem from "./WorkoutItem"

const WorkoutList = () =>{
    const workoutList = []
    const length = 10
    for(let index = 0; index< length; index++){
        workoutList.push(<WorkoutItem key={index} workoutItemValue={index}/>)
    }
    return(
        <>
        <ul>
        {workoutList}
       
        </ul>
        </>
    )
}
export default WorkoutList