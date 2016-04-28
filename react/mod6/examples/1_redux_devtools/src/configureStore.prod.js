import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers';

const enhancer = applyMiddleware(thunk);

export default function configureStore(initialState){
  let store = createStore(combineReducers(reducers), initialState, enhancer);
  return store;
}
