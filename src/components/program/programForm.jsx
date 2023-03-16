const ProgramForm = ({forAdding})=>{
    
    return(
        <>
        <h1>Add or update program</h1>
        {forAdding && <button>Add</button>}
        {!forAdding &&<button>Save</button>}
        </>
    )
}

export default ProgramForm