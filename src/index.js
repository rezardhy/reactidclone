import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'

import NavBar from './components/Molecule/NavBar';
import {navValue, navLogin} from './service/navbar';
import Routing from "./route/";

import {createStore} from 'redux';
import allReducers from './reducers';
import { getData } from './actions';
import { Provider } from 'react-redux';

const store = createStore(allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
  <React.StrictMode>
    <NavBar navLeft={navValue} navRight = {navLogin}/>  
    <Provider store={store}>
      <Routing/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
