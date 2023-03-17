const WorkoutForm = ({forAdding})=>{
    
    return(
        <>
        <h1>Add or update workout</h1>
        {forAdding && <button>Add</button>}
        {!forAdding &&<button>Save</button>}
        </>
    )
}
export default WorkoutForm