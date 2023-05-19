import { ActionTypes } from '../actions';

const initialState = {
  authenticated: false,
};

const AuthReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      return {
        ...state,
        all: action.payload,
      };
    case ActionTypes.DEAUTH_USER:
      return {
        ...state,
        current: action.payload,
      };
    case ActionTypes.AUTH_ERROR:
      return {
        ...state,
        current: action.payload,
      };
    default:
      return state;
  }
};
export default AuthReducer;
