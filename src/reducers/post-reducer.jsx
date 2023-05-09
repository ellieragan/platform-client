import { ActionTypes } from '../actions';

const initialState = {
  all: [],
  current: {},
//   byID: {},
//   loading: false,
//   error: null,
};

const PostReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
      return {
        ...state,
        // loading: true,
        // all: action.payload,
      };
    case ActionTypes.FETCH_POST:
      return {
        ...state,
      };
    case ActionTypes.FETCH_POST_SUCCESS:
      return {
        ...state,
        current: action.payload,
        // current: {
        //   ...state.current,
        //   [action.payload.id]: action.payload,
        // },
      };
    case ActionTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        // all: [...state.all, action.payload],
        all: action.payload,
        // error: null,
        // loading: false,
      };
    case ActionTypes.FETCH_POSTS_FAILURE:
      return {
        ...state,
        // error: action.payload,
        // loading: false,
      };
    default:
      return state;
  }
};

export default PostReducer;
