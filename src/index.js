import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { Router } from 'react-router';
import  createBrowserHistory from 'history/createBrowserHistory';
import rootReducer from './state';
import rootSaga from './state/saga';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const sagaMiddleware = createSagaMiddleware();

const reduxMiddlewares = [
  sagaMiddleware
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(...reduxMiddlewares)
));

sagaMiddleware.run(rootSaga);

const customHistory = createBrowserHistory()

ReactDOM.render(
  <Provider store={store}>
    <Router history={customHistory}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
