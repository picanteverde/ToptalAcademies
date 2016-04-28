import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { persistState } from 'redux-devtools';
import DevTools from './containers/DevTools';
import { reducers } from './reducers';

const logger = createLogger();

function getDebugSessionKey() {
  const matches = window.location.href.match(/[?&]debug_session=([^&#]+)\b/);
  return (matches && matches.length > 0)? matches[1] : null;
}

const enhancer = compose(
  applyMiddleware(thunk, logger),
  DevTools.instrument(),
  persistState(getDebugSessionKey())
);


export default function configureStore(initialState){
  let store = createStore(combineReducers(reducers), initialState, enhancer);
/*
  if (module.hot) {
    module.hot.accept('./reducers', () =>
      store.replaceReducer(combineReducers(require('./reducers').reducers))
    );
  }
*/
  return store;
}
