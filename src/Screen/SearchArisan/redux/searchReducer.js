const initialState = {
  dataResultSearch: [],
  isLoading: false,
  searchId: '',
};
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_ID':
      return {
        ...state,
        searchId: action.payload,
      };
    case 'SEARCH':
      return {
        ...state,
        isLoading: true,
      };
    case 'SEARCH':
      return {
        ...state,
        isLoading: true,
      };
    case 'SEARCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        dataResultSearch: action.payload,
      };
    case 'SEARCH_FAILED':
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default searchReducer;
