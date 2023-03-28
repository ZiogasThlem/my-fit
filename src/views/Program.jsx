import ProgramChoice from "../components/program/ProgramChoice"

const Program = ()=>{
    const isSelected = true
    return(
        <>
        <h1>Program</h1>
        {isSelected && <ProgramChoice></ProgramChoice>}
        </>
    )
}

export default Program