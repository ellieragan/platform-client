// import $ from 'jquery';
import './style.scss';
// import { ActionTypes } from './actions';
import store, { ActionTypes } from './actions/index';

// let num = 0;

// function count() {
//   num += 1;
//   $('#main').html(`You've been on this page for ${num} seconds.`);
// }

// setInterval(count, 1000);

const token = localStorage.getItem('token');
if (token) {
  store.dispatch({ type: ActionTypes.AUTH_USER });
}
