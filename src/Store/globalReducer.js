const initialState = {
  selectedPeriodeUndian: '',
  selectedPeriodePembayaran: '',
  selectedArisan: {},
  selectedPeserta: {},
  selectedStatus: {},
};
const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PERIODE_UNDIAN':
      return {
        ...state,
        selectedPeriodeUndian: action.payload,
      };
    case 'SET_PERIODE_PEMBAYARAN':
      return {
        ...state,
        selectedPeriodePembayaran: action.payload,
      };
    case 'SET_SELECTED_ARISAN':
      return {
        ...state,
        selectedArisan: action.payload,
      };
    case 'SET_SELECTED_PESERTA':
      return {
        ...state,
        selectedPeserta: action.payload,
      };

    case 'SET_STATUS_PEMBAYARAN':
      return {
        ...state,
        selectedStatus: action.payload,
      };

    default:
      return state;
  }
};

export default globalReducer;
