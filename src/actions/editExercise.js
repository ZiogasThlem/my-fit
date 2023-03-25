// actions/exercise.js

export const editExerciseRequest = () => ({
    type: 'EDIT_EXERCISE_REQUEST',
  });
  
  export const editExerciseSuccess = (exercise) => ({
    type: 'EDIT_EXERCISE_SUCCESS',
    payload: exercise,
  });
  
  export const editExerciseFailure = (error) => ({
    type: 'EDIT_EXERCISE_FAILURE',
    payload: error,
  });
  
  export const editExercise = (exerciseId, updatedExercise) => {
    return async (dispatch) => {
      dispatch(editExerciseRequest());
      try {
        const response = await fetch(`https://mefit-production.up.railway.app/api/v1/exercise/${exerciseId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedExercise),
        });
        const data = await response.json();
        if (response.ok) {
          dispatch(editExerciseSuccess(data));
        } else {
          dispatch(editExerciseFailure(data));
        }
      } catch (error) {
        dispatch(editExerciseFailure(error));
      }
    };
  };
  