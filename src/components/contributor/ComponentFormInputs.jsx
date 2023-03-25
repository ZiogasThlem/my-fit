const ComponentFormInputs = ({labelName, forEditing, forAdding,isArray,inputValue,inputType,inputDefaultValue,inputRegisterName,itemNameConfig,register})=>{
    return(<>
    <div>
                <label>
                    {`${labelName}:`}
                    {!forEditing && !forAdding && !isArray && inputValue}
                    {(forAdding || forEditing) && !isArray && 
                    <input type={inputType} defaultValue={inputDefaultValue} {...register(inputRegisterName,itemNameConfig)}/>}
                    {/* show the child components */}
                    {/* {isArray && childComponentPool} */}
                </label>
            </div>
    </>)
}
export default ComponentFormInputs