
export const fetchExerciseRequest = () => {
    return {
      type: 'FETCH_EXERCISE_REQUEST',
    };
  };
  
  export const fetchExerciseSuccess = (data) => {
    return {
      type: 'FETCH_EXERCISE_SUCCESS',
      payload: data,
    };
  };
  
  export const fetchExerciseFailure = (error) => {
    return {
      type: 'FETCH_EXERCISE_FAILURE',
      payload: error,
    };
  };
  
  export const fetchExercise = () => {
    return (dispatch) => {
      dispatch(fetchExerciseRequest());
      fetch('https://mefit-production.up.railway.app/api/v1/exercise')
        .then((response) => response.json())
        .then((data) => {
          dispatch(fetchExerciseSuccess(data));
        })
        .catch((error) => {
          dispatch(fetchExerciseFailure(error));
        });
    };
  };


  