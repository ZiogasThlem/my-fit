import ProgramItem from "./ProgramItem";

const ProgramList = ()=>{
    const length=10;
    const programList = [];
    for(let index = 0; index < length; index++){
        programList.push(<ProgramItem key={index} programItemValue={index}/>)
    }
    return(
        <>
        <ul>
            {programList}
        </ul>
        </>
    )    
}

export default ProgramList