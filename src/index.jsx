import './style.scss';
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { createRoot } from 'react-dom/client';
import rootReducer from './reducers';
import App from './components/app';

// this creates the store with the reducers
const store = configureStore({
  reducer: rootReducer,
});

const root = createRoot(document.getElementById('main'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

// const root = createRoot(document.getElementById('main'));

// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// );

// function App() {
//   return (
//     <div className="test">All the REACT are belong to us!</div>
//   );
// }

// const App = () => <div className="test">All the REACT are belong to us!</div>;

// const root = createRoot(document.getElementById('main'));
// root.render(<App />);
