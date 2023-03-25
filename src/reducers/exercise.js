const initialState = {
    data: [],
    loading: false,
    error: null,
  };
  
  const exerciseReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_EXERCISE_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'FETCH_EXERCISE_SUCCESS':
        return {
          ...state,
          loading: false,
          data: action.payload,
        };
      case 'FETCH_EXERCISE_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default exerciseReducer;
  