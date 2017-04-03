import createSagaMiddleware from 'redux-saga';
import { spawn } from 'redux-saga/effects';
import { fromJS } from 'immutable';
import { createStore, compose, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';

const DEBUG = process.env.NODE_ENV !== 'production';

function* rootSaga() { }

export default function configureStore() {
  const initialState = fromJS({});
  const sagaMiddleware = createSagaMiddleware();
  const enhancer = compose(
    applyMiddleware(sagaMiddleware),
    (DEBUG && (<any>window).devToolsExtension) ? (<any>window).devToolsExtension() : f => f
  );
  const store = createStore(null, initialState, enhancer);
  sagaMiddleware.run(rootSaga);
  return store;
}
