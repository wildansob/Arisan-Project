const initialState = {
  dataArisan: [],
};
const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ARISAN':
      return {
        ...state,
        dataArisan: action.payload,
      };
    case 'SET_FILTERED_ARISAN':
      return {
        ...state,
        dataArisan: action.payload,
      };

    default:
      return state;
  }
};

export default homeReducer;
