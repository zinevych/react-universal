import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import appReducer from './reducers';
import thunk from 'redux-thunk';

const initialState = window.__INITIAL_STATE__;

let store = createStore(appReducer, initialState, applyMiddleware(
    thunk
));
ReactDOM.render(
    <Provider store={store}>
      {routes}
    </Provider>,
    document.getElementById('react-main-mount'));