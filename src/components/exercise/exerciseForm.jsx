const ExerciseForm = ({forAdding})=>{
    

    
    return(
        <>
        <h1>Add or update exercise</h1>
        {forAdding && <button>Add</button>}
        {!forAdding &&<button>Save</button>}
        </>
    )
}

export default ExerciseForm