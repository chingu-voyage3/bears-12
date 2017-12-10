import React from 'react';
import ReactDOM from 'react-dom';
import getRoutes from './config/routes';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import allReducers from './redux/index'

import './index.css';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(thunk))
)

ReactDOM.render(
    <Provider store={store}>
      {getRoutes(store)}
    </Provider>,
  document.getElementById('root'));
registerServiceWorker();
