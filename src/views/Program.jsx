import ProgramList from "../components/program/ProgramList"
const Program = ()=>{
    const isSelected = true
    return(
        <>
        <h1>Program</h1>
        {isSelected && <ProgramList></ProgramList>}
        </>
    )
}

export default Program