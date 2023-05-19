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
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',
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
    const ROOT_URL = 'https://platform-api-ellieragan.onrender.com/api';
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
    const ROOT_URL = 'https://platform-api-ellieragan.onrender.com/api';
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
    const ROOT_URL = 'https://platform-api-ellieragan.onrender.com/api';
    const API_KEY = '?key=e_boyd';

    axios.post(`${ROOT_URL}/posts${API_KEY}`, post, { headers: { authorization: localStorage.getItem('token') } })
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
    const ROOT_URL = 'https://platform-api-ellieragan.onrender.com/api';
    const API_KEY = '?key=e_boyd';

    axios.put(`${ROOT_URL}/posts/${id}${API_KEY}`, post, { headers: { authorization: localStorage.getItem('token') } })
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
    const ROOT_URL = 'https://platform-api-ellieragan.onrender.com/api';
    const API_KEY = '?key=e_boyd';

    axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`, { headers: { authorization: localStorage.getItem('token') } })
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

// deletes token from localstorage
// and deauths
export function signoutUser(navigate) {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: ActionTypes.DEAUTH_USER });
    navigate('/');
  };
}

// trigger to deauth if there is error
// can also use in your error reducer if you have one to display an error message
export function authError(error) {
  return {
    type: ActionTypes.AUTH_ERROR,
    message: error,
  };
}

export function signinUser({ email, password }, navigate) {
  // takes in an object with email and password (minimal user object)
  // returns a thunk method that takes dispatch as an argument (just like our create post method really)
  return (dispatch) => {
    const ROOT_URL = 'https://platform-api-ellieragan.onrender.com/api';
    const API_KEY = '?key=e_boyd';

    axios.post(`${ROOT_URL}/posts${API_KEY}/signin`, { email, password })
      .then((response) => {
        dispatch({
          type: ActionTypes.AUTH_USER,
        });
        localStorage.setItem('token', response.data.token);
        navigate('/');
      })
      .catch((error) => {
        dispatch(authError(`Sign In Failed: ${error.response.data}`));
      });
  };
  // does an axios.post on the /signin endpoint and passes in { email, password}
  // on success does:
  //  dispatch({ type: ActionTypes.AUTH_USER });
  //  localStorage.setItem('token', response.data.token);
  // on error should dispatch(authError(`Sign In Failed: ${error.response.data}`));
}

export function signupUser({ email, password }, navigate) {
  const ROOT_URL = 'https://platform-api-ellieragan.onrender.com/api';
  const API_KEY = '?key=e_boyd';

  return (dispatch) => {
    axios.post(`${ROOT_URL}/posts${API_KEY}/signup`, { email, password })
      .then((response) => {
        dispatch({
          type: ActionTypes.AUTH_USER,
        });
        localStorage.setItem('token', response.data.token);
        navigate('/');
      })
      .catch((error) => {
        dispatch(authError(`Sign Up Failed: ${error.response.data}`));
      });
  };
  // takes in an object with email and password (minimal user object)
  // returns a thunk method that takes dispatch as an argument (just like our create post method really)
  // does an axios.post on the /signup endpoint (only difference from above)
  // on success does:
  //  dispatch({ type: ActionTypes.AUTH_USER });
  //  localStorage.setItem('token', response.data.token);
  // on error should dispatch(authError(`Sign Up Failed: ${error.response.data}`));
}
