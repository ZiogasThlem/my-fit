const ProgramItem = ({program})=>{
    return(
        <>
            <td>
                {program.name}
            </td>
            <td>
                {program.category}
            </td>            
        </>
    )
}
export default ProgramItem