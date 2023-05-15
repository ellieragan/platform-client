import axios from 'axios';

// keys for actiontypes
export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  UPDATE_POST: 'UPDATE_POST',
  CREATE_POST: 'CREATE_POST',
  DELETE_POST: 'DELETE_POST',
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

export function fetchPosts() {
  return (dispatch) => {
    const ROOT_URL = 'https://platform.cs52.me/api';
    const API_KEY = '?key=e_boyd';

    axios.get(`${ROOT_URL}/posts${API_KEY}`)
      .then((response) => {
        const posts = response.data;
        dispatch({
          type: ActionTypes.FETCH_POSTS,
          payload: posts,
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch({
          payload: errorMessage,
        });
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
        dispatch({
          type: ActionTypes.FETCH_POST,
          payload: post,
        });
      })

      .catch((error) => {
        const errorMessage = error.message;
        dispatch({
          payload: errorMessage,
        });
      });
  };
}

export function createPost(post, navigate) {
  return (dispatch) => {
    const ROOT_URL = 'https://platform.cs52.me/api';
    const API_KEY = '?key=e_boyd';

    axios.post(`${ROOT_URL}/posts${API_KEY}`, post)
      .then((response) => {
        dispatch({
          type: ActionTypes.CREATE_POST,
          payload: response.data,
        });
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function updatePost(post, id) {
  return (dispatch) => {
    const ROOT_URL = 'https://platform.cs52.me/api';
    const API_KEY = '?key=e_boyd';

    axios.put(`${ROOT_URL}/posts/${id}${API_KEY}`, post)
      .then((response) => {
        const postdata = response.data;
        dispatch({
          type: ActionTypes.UPDATE_POST,
          payload: postdata,
        });
      })

      .catch((error) => {
        const errorMessage = error.message;
        dispatch({
          payload: errorMessage,
        });
      });
  };
}

export function deletePost(id, navigate) {
  return (dispatch) => {
    const ROOT_URL = 'https://platform.cs52.me/api';
    const API_KEY = '?key=e_boyd';

    axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
      .then((response) => {
        dispatch({
          type: ActionTypes.DELETE_POST,
          payload: response.data,
        });
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
