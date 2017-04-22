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
    apiKey: "AIzaSyAHfxZxBiBY-g6CSAI9DNJ_8UHr3WsD22k",
    authDomain: "customerrorpage-1a3c0.firebaseapp.com",
    databaseURL: "https://customerrorpage-1a3c0.firebaseio.com",
    projectId: "customerrorpage-1a3c0",
    storageBucket: "customerrorpage-1a3c0.appspot.com",
    messagingSenderId: "83975469911"

};
firebase.initializeApp(config);



ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
