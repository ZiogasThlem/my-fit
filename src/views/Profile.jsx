import ExerciseUpdate from "../components/exercise/ExerciseUpdate";
import WorkoutUpdate from "../components/workout/WorkoutUpdate";
import ProgramUpdate from "../components/program/ProgramUpdate";
import ProgramAdd from "../components/program/ProgramAdd";
import WorkoutAdd from "../components/workout/WorkoutAdd";
import ExerciseAdd from "../components/exercise/ExerciseAdd";
import WorkoutList from "../components/workout/WorkoutList";
import WorkoutItem from "../components/workout/WorkoutItem";

const Profile = () =>{
    const contributor = true;
    const isContributor = false;
    const isAdmin = true;
    return(
        <>
        <h1>Profile</h1>
        <ul>

        {isContributor && <WorkoutUpdate></WorkoutUpdate>}
        {isContributor && <ProgramUpdate></ProgramUpdate>}
        {isContributor && <ExerciseUpdate></ExerciseUpdate>}
        {isContributor && <ProgramAdd></ProgramAdd>}
        {isContributor && <WorkoutAdd></WorkoutAdd>}
        {isContributor && <ExerciseAdd></ExerciseAdd>}
        {/* {!isContributor && <WorkoutList/>} */}
        {!isContributor && <WorkoutItem/>}
        </ul>
        
        </>
    )
}

export default Profile