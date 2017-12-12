import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import RootReducer from './reducers/RootReducer';
import reduxPromise from 'redux-promise';
import { Provider } from 'react-redux';

const theStore = applyMiddleware(reduxPromise)(createStore)(RootReducer);
// the friendly way...
// const middleWare = applyMiddleware(reduxPromise);
// const storeWithMid = middleWare(createStore);
// const theStore = storeWithMid(RootReducer);



ReactDOM.render(
  <Provider store={theStore}>
    <App />
  </Provider>,
  document.getElementById('root'));
