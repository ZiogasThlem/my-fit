import React, { useDebugValue, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router";
import { isInArray } from "../../helpers/isInArray";
import { formatDate } from "../../mappers/formatDate";
import { selectGoalById, updateGoal } from "../../reduxParts/reducers/goalSlice";
import { selectAllPrograms, selectProgramsByIds } from "../../reduxParts/reducers/programSlice";
import { selectWorkoutsByIds } from "../../reduxParts/reducers/workoutSlice";
import ProgramItem from "../program/ProgramItem";
import WorkoutItem from "../workout/WorkoutItem";

const GoalEdit = ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id}=useParams();
    const goal = useSelector((state)=>state.goal.goal);
    const [formData,setFormData]=useState({name:goal.name || '', start_date:new Date(), end_date:new Date(), total_programs:goal.total_programs || [], completed_programs:goal.completed_programs?goal.completed_programs.length:0, program:[]})
    //set checked items and program ids to update
    const [checkedItems,setCheckedItems] = useState([]);
    const [programIds,setProgramIds]=useState([])

    const programsSelected = useSelector((state)=>state.program.programs);
    //goal( from state, then set the goal usnig useState, and goalloaded boolean)
    const [goalLoaded,setGoalLoaded] =useState(false)
    //workouts(dispatch the programs of this goal to add them or delete them, also load programs)
    const [programsloaded,setProgramsLoaded] = useState(false);
    const [programs,setPrograms]=useState([])
    useEffect(()=>{
        dispatch(selectGoalById(id))
    },[dispatch])
    useEffect(()=>{
       if(goal){
        dispatch(selectAllPrograms())
       } 
    },[goal,dispatch])
    useEffect(()=>{
        if(programsSelected){
            setPrograms([...programsSelected]);
        }
    },[programsSelected])
    useEffect(()=>{
        if(programs){
            setProgramIds([...programs.map(()=>0)]);
            setCheckedItems([...programs.map(()=>false)]);
            setProgramsLoaded(true)
        }
    },[programs])
    useEffect(()=>{
        setProgramIds([...checkedItems.map((item,index)=>{
            if(item){
                return programIds[index];
            }
            return 0;
        })])
    },[checkedItems])
    const handleSubmit = (event)=>{
        event.preventDefault();
        const programIdPool = programIds.filter((item)=>item!==0)
        const itemPayload = {id:id,name:formData.name, start_date:formData.start_date, end_date:formData.end_date, total_programs:formData.total_programs, completed_programs:formData.completed_programs, program:programIdPool}
        console.log(itemPayload);
        dispatch((updateGoal(itemPayload)))

    }
    const handleProgram = (event,itemId,index)=>{

        setCheckedItems((prevItems)=>{
            const newItems = [...prevItems];
            newItems[index] = !prevItems[index]
            return newItems
        })

        setProgramIds((prevIds)=>{
            const newIds = [...prevIds];
            newIds[index]=itemId;
            return newIds;
        })
    }
    const date = (new Date())
    if(!programs && !checkedItems){
        return(<div>Goal Loading...</div>)
    }
    return(
    <>
        

        <form onSubmit={handleSubmit}>
        <table>
            <thead>
                <tr>
                    <th colSpan={4}>Edit Goal</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td><input type={'text'} value={goal.name} onChange={(event)=>setFormData({...formData,name:event.target.value})}></input></td>
                </tr>
                <tr>
                    <td>Start date</td>
                    <td><input type={'date'} value={formatDate(goal.start_date)} onChange={(event)=>setFormData({...formData,start_date:event.target.value})}></input></td>
                </tr>
                <tr>
                    <td>End Date</td>
                    <td><input type={'date'} value={formatDate(goal.end_date)} onChange={(event)=>setFormData({...formData,end_date:event.target.value})}></input></td>
                </tr>
                <tr>
                    <td>Total Programs</td>
                    <td><input type={'number'} value={goal.total_programs} onChange={(event)=>setFormData({...formData,total_programs:event.target.value})}></input></td>
                </tr>
                
                    
                

            </tbody>
        </table>
        <table>
            <thead>
                <tr>
                    <th colSpan={4}>Programs to add or remove</th>
                </tr>
                <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Total Workouts</th>
                </tr>
            </thead>
            <tbody>
                {programsloaded && checkedItems && programs.map((program,index)=>{
                    return(
                        <React.Fragment key={`${date}_${index}`}>
                            <tr>
                                <ProgramItem program={program} key={`${date}_${index}_${program}`}/>
                                <td><input type={'checkbox'} onChange={(event)=>handleProgram(event,program.id,index)} checked={checkedItems[index] || false}/></td>
                            </tr>
                        </React.Fragment>
                    )
                })}
                <tr>
                    <td colSpan={3}><button type="submit">Submit</button></td>
                </tr>
            </tbody>
        </table>
        </form>
        
    </>
    )
}
export default GoalEdit