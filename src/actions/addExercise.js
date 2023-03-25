
export const ADD_EXERCISE_REQUEST = 'ADD_EXERCISE_REQUEST';
  export const ADD_EXERCISE_SUCCESS = 'ADD_EXERCISE_SUCCESS';
  export const ADD_EXERCISE_FAILURE = 'ADD_EXERCISE_FAILURE';
  
  const API_URL = 'https://mefit-production.up.railway.app/api/v1';
  
  export const addExerciseRequest = () => ({
    type: ADD_EXERCISE_REQUEST,
  });
  
  export const addExerciseSuccess = (exercise) => ({
    type: ADD_EXERCISE_SUCCESS,
    payload: exercise,
  });
  
  export const addExerciseFailure = (error) => ({
    type: ADD_EXERCISE_FAILURE,
    payload: error,
  });
  
  export const addExercise = (exerciseData) => {
    return async (dispatch) => {
      dispatch(addExerciseRequest());
      try {
        const response = await fetch(`${API_URL}/exercise`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(exerciseData),
        });
        const text = await response.text();
        const data = text && JSON.parse(text);
        if (!response.ok) {
          throw new Error(data.message);
        }
        dispatch(addExerciseSuccess(data));
      } catch (error) {
        dispatch(addExerciseFailure(error));
      }
    };
  };
  
  
