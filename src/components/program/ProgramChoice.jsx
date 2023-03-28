// import ProgramItem from "./ProgramItem";

// const ProgramList = ()=>{
//     const length=10;
//     const programList = [];
//     for(let index = 0; index < length; index++){
//         programList.push(<ProgramItem key={index} programItemValue={index}/>)
//     }
//     return(
//         <>
//         <ul>
//             {programList}
//         </ul>
//         </>
//     )    
// }

// export default ProgramList

import React from 'react'
import ProgramListItem from './ProgramListItem'

// ProgramListItem components into a programList
// array, map n stuff idk (same for all listItem to choice components)

const ProgramChoice = ({programs}) => {

  const programList = programs.map( program => 
    <ProgramListItem key={programs.indexOf(program)} program={program} />
    )


  return (
    <div id='User'>
        <h1>Program Selection Menu</h1>
        <ul>
            {programList}
        </ul>
    </div>
  )
}

export default ProgramChoice