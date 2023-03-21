import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { updateExerciseAsync } from '../../ReduxParts/exercise/exerciseSlice';

const ExerciseListItem = ({exercise, handleAdd}) => {
  const exerciseNameConfig = {
    required: true,
    minLength:2
}



  const checkbox = useRef();
  const onClick = exercise => {
    handleAdd(exercise.target.value)
  }
  const {register,handleSubmit}=useForm();
  const [toEdit,setToEdit]=useState(false);
  const dispatch = useDispatch();
  // function toEdit(){
  //   if(checkbox.current.checked){
  //     return true;
  //   }
  //   return false;
  // }
  const onSubmit = (values) =>{
    //update exercise with id
    const id=exercise.id;
     dispatch(updateExerciseAsync({id, desc:values.desc}))
  }
  function handleChange(){
    if(checkbox.current.checked){
      setToEdit(true);
      return
    }
    setToEdit(false)
  }
  return (

    <>
    
    <form onSubmit={handleSubmit(onSubmit)}>
      
      <input type={'checkbox'} ref={checkbox} onChange={handleChange}/><br></br>
    <label>Name:{exercise.name} </label><br></br>
    <label>Description:{exercise.desc} </label><br></br>
    <input type="text" id='description-input' {...register('desc',exerciseNameConfig)}/>
    <label>Muscle Group:{exercise.tmg} </label><br></br>
    <label>Repetitions:{exercise.repetitions} </label><br></br>
    <label>Image link:{exercise.img} </label><br></br>
    <label>Complete:{exercise.complete} </label><br></br>
    <label>Workout:{exercise.workout} </label><br></br>
    
    <button type='submit'>Save</button>
    </form>
    {toEdit&& <>test</>}
    {/* <button onClick={onClick}>
    </button> */}
    </>

  )
}

export default ExerciseListItem