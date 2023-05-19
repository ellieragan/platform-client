import './style.scss';
import store, { ActionTypes } from './actions/index';

const token = localStorage.getItem('token');
if (token) {
  store.dispatch({ type: ActionTypes.AUTH_USER });
}
