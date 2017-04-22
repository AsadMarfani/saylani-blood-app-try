import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { Provider } from 'react-redux';
import { store } from './store';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';



import firebase from 'firebase'

// Initialize Firebase
var config = {
  // Firebase Config API
};
firebase.initializeApp(config);



ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
