import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExercise } from '../actions/exercise';
import AddExerciseForm from './AddExerciseForm';
import EditExerciseForm from './EditExerciseForm';

const ExerciseList = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.exercise);
  const [showAll, setShowAll] = useState(false);


  const handleAddExerciseClick = () => {
   <AddExerciseForm/>
  };
  const handleEditExerciseClick = () => {
    <EditExerciseForm/>
   };
  useEffect(() => {
    dispatch(fetchExercise());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
        <h1>Exercise List</h1>
       
        <button onClick={handleAddExerciseClick}>Add Exercise</button>
        <button onClick={handleEditExerciseClick}>Edit Exercise</button>
      <button onClick={() => setShowAll(true)}>Show All Exercises</button>
      <ul>
        {showAll
          ? data.map((exercise) => (
              <li key={exercise.id}>                
            <h3>{exercise.name}</h3>
            <p>{exercise.desc}</p>
            <p>{exercise.repetitions}</p>
            <p>{exercise.tmg}</p>
            <p>{exercise.img}</p>
            <p>{exercise.vid}</p>
            <p>{exercise.workout}</p>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default ExerciseList;




