import { useSelector } from "react-redux"

const ExerciseAttribute = ({attributeName})=>{
    const exercise=useSelector(state=>{
        return state.exercise;})
    
    //copy the keys and values of exe
    
}

export default ExerciseAttribute