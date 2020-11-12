import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {Router} from 'react-router';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {history} from './history';

import './index.css';
import App from './App';
import {reducers} from "./rootReducer";

const middleware = [thunk, logger];
const store = createStore(
    reducers,
    applyMiddleware(...middleware),
);

ReactDOM.render(
  <div>
      <Provider store={store}>
      <Router history={history}>
          <App/>
      </Router>
  </Provider>
  </div>,
  document.getElementById('root')
);
