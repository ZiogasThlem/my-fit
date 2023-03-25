import ComponentFormButtons from "./ComponentFormButtons";
import ComponentFormInputs from "./ComponentFormInputs";

const ItemToEditAttributes = ({itemStructure, register, onSubmit,forAdding, forEditing, forViewing, item, ID, itemNameConfig})=>{
    const itemToEditAttributesList=[]
    // const [childComponentPool,setChildComponentPool]=useState([])
    const childComponentPool=[]
    let index = 0;
    let isArray=false;
    //iterate through item structure attributes
    for(let itemStructureKey in itemStructure){
        let inputType = itemStructure[itemStructureKey][2];
        if(inputType=='array'){
            isArray=true;
        }else{
            isArray=false;
        }
        const inputValuekey = itemStructure[itemStructureKey][1];
        let inputNullValue = '';
        //if item does not exist put the input value as null
        const inputValue = forAdding?inputNullValue:item[inputValuekey];
        if(isArray){
            //construct the childComponentPool
            // for(let idElement of inputValue){
            //     console.log(idElement);
            //     // dispatchCruncher(dispatch,'',idElement,itemChildType,'getId')
            //     if(loaded){
            //         // setChildComponentPool([...itemChild]);
            //     }
            //     console.log(itemChild);
            // }
            // dispatch(getExercisesById(inputValue))
            // console.log(itemChild);
            // console.log(items);
        }
        // if(typeof inputValue =='number'){
        //     inputType = 'number';
        // }
        // if(inputType=='number'){
        //     inputNullValue = 0;
        // }
        const inputDefaultValue = forAdding?inputNullValue:inputValue;
        const labelName = itemStructure[itemStructureKey][0];
        const inputRegisterName = itemStructure[itemStructureKey][1];
        //struct the form
        itemToEditAttributesList.push(
            <ComponentFormInputs key={`exercise${ID}_${index++}`} 
            labelName={labelName} 
            forEditing={forEditing} 
            forAdding={forAdding} 
            isArray={isArray} 
            inputValue={inputValue} 
            inputType={inputType} 
            inputDefaultValue={inputDefaultValue} 
            inputRegisterName={inputRegisterName} 
            itemNameConfig={itemNameConfig} 
            register={register}>
            </ComponentFormInputs>
            // <ComponentCRUD key={`exercise${id}_${index++}`} switches={switches} fields={fields}/>
        )
        
    }
    // console.log(childComponentPool);
    //render buttons
    itemToEditAttributesList.push(
        !forViewing && <ComponentFormButtons key={`button_${ID}_${index++}`} forAdding={forAdding} forEditing={forEditing} onSubmit={onSubmit}/>,
        )
    return(<>
        {itemToEditAttributesList}
    </>)
}

export default ItemToEditAttributes