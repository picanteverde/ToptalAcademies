import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducers } from './reducers';

function patchStoreToAddLogging(store){
  let next = store.dispatch;
  store.dispatch = function dispatchAndLog(action){
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    return result;
  };
}

function patchStoreToAddCrashReporting(store) {
  let next = store.dispatch;
  store.dispatch = function dispatchAndReportErrors(action) {
    try {
      return next(action);
    } catch (err) {
      console.error('Caught an exception!', err);
      throw err;
    }
  };
}

/*
function logger(store) {
  return function wrapDispatchToAddLogging(next) {
    return function dispatchAndLog(action) {
      console.log('dispatching', action);
      let result = next(action);
      console.log('next state', store.getState());
      return result;
    };
  };
}

*/
const logger = store => next => action => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
}


const thunk = store => next => action => typeof action === 'function' ? action(store.dispatch, store.getState) : next(action);



export default function configureStore(){
  let store = createStore(combineReducers(reducers), applyMiddleware(thunk, logger));
  return store;
}
