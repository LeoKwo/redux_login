import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore, combineReducers } from 'redux';
import allReducer from './reducers/index.js'
import { Provider } from 'react-redux'; // connects our global states, the store the our entire app

const myStore = createStore(
  allReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // this is for chrome extension
)


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <Provider store={myStore}>
    <App tab="home" />
  </Provider>
);