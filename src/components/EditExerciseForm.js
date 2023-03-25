// components/EditExerciseForm.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editExercise } from '../actions/editExercise.js';

const EditExerciseForm = ({ exercise }) => {
  const dispatch = useDispatch();
  const [updatedExercise, setUpdatedExercise] = useState({
    name: exercise.name,
    description: exercise.desc,
    repetitions: exercise.repetitions,
    tmg: exercise.tmg,
    img: exercise.img,
    vid: exercise.vid,
  });

  const handleInputChange = (event) => {
    setUpdatedExercise({
      ...updatedExercise,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(editExercise(exercise.id, updatedExercise));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" value={updatedExercise.name} onChange={handleInputChange} />
      <br />
      <label htmlFor="description">Description:</label>
      <textarea name="description" value={updatedExercise.desc} onChange={handleInputChange} />
      <br />
      <label htmlFor="repetitions">Repetitions:</label>
      <input type="number" name="repetitions" value={updatedExercise.repetitions} onChange={handleInputChange} />
      <br />
      <label htmlFor="tmg">Target Muscle Group:</label>
      <input type="text" name="tmg" value={updatedExercise.tmg} onChange={handleInputChange} />
      <br />
      <label htmlFor="img">Image:</label>
      <input type="text" name="img" value={updatedExercise.img} onChange={handleInputChange} />
      <br />
      <label htmlFor="vid">Video:</label>
      <input type="text" name="vid" value={updatedExercise.vid} onChange={handleInputChange} />
      <br />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditExerciseForm;
