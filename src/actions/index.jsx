import axios from 'axios';

// keys for actiontypes
export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  // FETCH_POST: 'FETCH_POST',
  // FETCH_POSTS_REQUEST: 'FETCH_POSTS_REQUEST',
  FETCH_POSTS_SUCCESS: 'FETCH_POSTS_SUCCESS',
  FETCH_POSTS_FAILURE: 'FETCH_POSTS_FAILURE',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
};

export function increment() {
  return {
    type: ActionTypes.INCREMENT,
    payload: null,
  };
}

export function decrement() {
  return {
    type: ActionTypes.DECREMENT,
    payload: null,
  };
}

// export function fetchPostsRequest() {
//   return {
//     type: ActionTypes.FETCH_POSTS_REQUEST,
//     payload: null,
//   };
// }

export function fetchPostsSuccess(posts) {
  return {
    type: ActionTypes.FETCH_POSTS_SUCCESS,
    payload: posts,
  };
}

// export function fetchPostSuccess(post) {
//   return {
//     type: ActionTypes.FETCH_POSTS_SUCCESS,
//     payload: post,
//   };
// }

export function fetchPostsFailure(error) {
  return {
    type: ActionTypes.FETCH_POSTS_FAILURE,
    payload: error,
  };
}

export function fetchPosts() {
  return (dispatch) => {
    const ROOT_URL = 'https://platform.cs52.me/api';
    const API_KEY = '?key=e_boyd';

    axios.get(`${ROOT_URL}/posts${API_KEY}`)
      .then((response) => {
        const posts = response.data;
        dispatch(fetchPostsSuccess(posts));
      })

      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchPostsFailure(errorMessage));
      });
  };
}

export function fetchPost(id) {
  return (dispatch) => {
    const ROOT_URL = 'https://platform.cs52.me/api';
    const API_KEY = '?key=e_boyd';

    axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)
      .then((response) => {
        const post = response.data;
        dispatch(fetchPostsSuccess(post));
      })

      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchPostsFailure(errorMessage));
      });
  };
}

export function createPost(post, navigate) {
  return (dispatch) => {
    const ROOT_URL = 'https://platform.cs52.me/api';
    const API_KEY = '?key=e_boyd';

    axios.post(`${ROOT_URL}/posts${API_KEY}`, post)
      .then((response) => {
        dispatch(fetchPosts());
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

// export function updatePost(post) {/* axios put */}

// export function deletePost(id, navigate) {/* axios delete */}
