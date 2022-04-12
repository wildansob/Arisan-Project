const initialState = {
    dataKontak: [],
  };
  const listPesertaReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'KONTAK':
        return {
          ...state,
          dataKontak: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default listPesertaReducer;
  