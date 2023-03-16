import ExerciseItem from "./ExerciseItem";

const ExerciseList = ()=>{
    const length = 10;
    const exerciseList = [];
    // const exerciseList = rows.map((exercise,index)=>{})
    for(let index = 0; index < length; index++){
        exerciseList.push(<ExerciseItem key={index} exerciseValue={index}/>)
    }
    
    return (<>
        {exerciseList}
    </>)
}
export default ExerciseList