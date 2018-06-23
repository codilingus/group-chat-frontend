import React from 'react';
import ReactDOM from 'react-dom';
import "babel-polyfill";
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import createHistory from "history/createBrowserHistory";
import { 
  routerMiddleware, 
  ConnectedRouter 
} from 'react-router-redux';
import rootReducer from './state';
import rootSaga from './state/saga';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const sagaMiddleware = createSagaMiddleware();
const history = createHistory();

const reduxMiddlewares = [
  sagaMiddleware,
  routerMiddleware(history)
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(...reduxMiddlewares)
));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
