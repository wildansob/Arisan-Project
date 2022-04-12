const initialState = {
  isLogin: false,
  token: '',
  dataProfile: {},
  isLoading: false,
};
const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLoading: true,
      };
    case 'signUp':
      return {
        ...state,
        isLoading: true,
      };
    case 'signUp_berhasil':
      return {
        ...state,
        isLoading: false,
      };

    case 'LOGIN_BERHASIL':
      return {
        ...state,
        isLogin: true,
        token: action.payload,
        isLoading: false,
      };

    case 'LOGIN_GAGAL':
      return {
        ...state,
        isLogin: false,
        isLoading: false,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLogin: false,
        token: '',
        dataProfile: {},
      };

    case 'PROFILE':
      return {
        ...state,
        dataProfile: action.payload,
      };

    default:
      return state;
  }
};

export default LoginReducer;
