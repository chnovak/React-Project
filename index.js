import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers';

const store = createStore(
  allReducers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );
 
const DATA = [
  { id: "todo-0", name: "wake up", completed: true },
  { id: "todo-1", name: "walk dogs", completed: false },
  { id: "todo-2", name: "go to work", completed: false }
];

ReactDOM.render(
<Provider store={store}>
  <App tasks={DATA} />
</Provider>  
,document.getElementById("root"));