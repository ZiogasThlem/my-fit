const ComponentFormButtons = ({forAdding,forEditing,onSubmit})=>{
    
    return(
        <>
        {!forAdding && forEditing && <button type="submit">Save</button>}    
        {!forAdding && !forEditing && <button onClick={onSubmit}>Delete</button>}    
        {forAdding && !forEditing && <button type="submit">Add</button>}    
        </>
        )
}

export default ComponentFormButtons