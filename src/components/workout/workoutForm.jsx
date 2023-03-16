const WorkoutForm = ()=>{
    const forAdding= true;
    const forUpdating = true;
    return(
        <>
        <h1>Add or update workout</h1>
        {forAdding && <button>Add</button>}
        {forUpdating &&<button>Save</button>}
        </>
    )
}
export default WorkoutForm