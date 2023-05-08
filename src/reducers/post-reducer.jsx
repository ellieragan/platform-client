import { ActionTypes } from '../actions';

const initialState = {
  all: [],
  current: {},
//   loading: false,
//   error: null,
};

const PostReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
      return {
        ...state,
        // loading: true,
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
