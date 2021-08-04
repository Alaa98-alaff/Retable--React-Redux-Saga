const initialState = {
  data: [],
  loading: false,
  error: null,
};

const projectData = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA_REQUESTED":
      return { ...state, loading: true };
    case "GET_DATA_SUCCESS":
      return { ...state, loading: false, data: action.data };
    case "GET_DATA_FAILED":
      return { ...state, loading: false, error: action.message };
    default:
      return state;
  }
};

export default projectData;
