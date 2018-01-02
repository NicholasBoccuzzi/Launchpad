import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
const store = configureStore();

console.log(store);
window.getState = store.getState;
window.dispatch = store.dispatch;


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Launchpad</h1>, root);
});
