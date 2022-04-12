const initialState = {
  dataDetailArisan: {},
  dataParticipant: [],
  participantId: [],
  pemenangArisan: [],
  belumMenang: [],
  historyArisan: [],
};
const DetailArisanReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DETAIL_ARISAN':
      return {
        ...state,
        dataDetailArisan: action.payload,
      };

    case 'PARTICIPANT':
      return {
        ...state,
        dataParticipant: action.payload,
      };
    case 'PARTICIPANTID':
      return {
        ...state,
        participantId: [...state.participantId, action.payload],
      };
    case 'PARTICIPANTID_REMOVE':
      return {
        ...state,
        participantId: [],
      };

    case 'PEMENANG_ARISAN':
      return {
        ...state,
        pemenangArisan: action.payload,
      };
    case 'BELUM_MENANG_REDUCER':
      return {
        ...state,
        belumMenang: action.payload,
      };
    case 'HISTORY_ARISAN_REDUCER':
      return {
        ...state,
        historyArisan: action.payload,
      };

    default:
      return state;
  }
};

export default DetailArisanReducer;
