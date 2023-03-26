const ExerciseItem = ({exercise})=>{
    return(
        <>
        <td>{`${exercise.name}`}</td>
        <td>{`${exercise.desc}`}</td>
        <td>{`${exercise.tmg}`}</td>
        <td>{`${exercise.repetitions}`}</td>
        <td>{`${exercise.img}`}</td>
        <td>{`${exercise.vid}`}</td>
        
        </>
    )
}
export default ExerciseItem