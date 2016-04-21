import {
  PERSONS_ADD,
  PERSONS_EDIT,
  PERSONS_DEL
} from '../actions/persons';

const initialState = [
  { name: 'Alejandro', lastName: 'Hernández' },
  { name: 'Viktor', lastName: 'Zira' },
  { name: 'Eva', lastName: 'Vidal' }
];

export function persons(state = initialState, action){
  let newState;
  switch (action.type) {
  case PERSONS_ADD:
    newState = state.slice();
    newState.push(action.person);
    return newState;
  case PERSONS_EDIT:
    newState = state.slice();
    newState.splice(action.idx, 1, action.person);
    return newState;
  case PERSONS_DEL:
    newState = state.slice();
    newState.splice(action.idx, 1);
    return newState;
  default:
    return state;
  }
}
