import { createStore, combineReducers } from 'redux';

const initialState = {
  name: 'picanteverde',
  count: 0
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'INCREMENT':
    return Object.assign({}, state, {
      count: state.count + action.payload
    });
  case 'DECREMENT':
    return Object.assign({}, state, {
      count: state.count - action.payload
    });
  case 'CHANGE_NAME':
    return Object.assign({}, state, {
      name: action.name
    });
  default:
    return state;
  }
};


const nameReducer = (state = 'picanteverde', action) => {
  switch (action.type) {
  case 'CHANGE_NAME':
    return action.name;
  default:
    return state;
  }
};

const countReducer = (state = 0, action) => {
  switch (action.type) {
  case 'INCREMENT':
    return state + action.payload;
  case 'DECREMENT':
    return state - action.payload;
  default:
    return state;
  }
};


let name = nameReducer;
let count = countReducer;


let store = createStore(combineReducers({
  name,
  count
}));

let startEl = document.getElementById('start');
const render = () => {
  startEl.innerHTML = JSON.stringify(store.getState());
};

render();

store.subscribe(render);

const inc1 =() => {
  return {
    type: 'INCREMENT',
    payload: 1
  };
};

const inc = (amount) => {
  return {
    type: 'INCREMENT',
    payload: amount
  };
};

const dec =(amount) => {
  return {
    type: 'DECREMENT',
    payload: amount
  };
};

const changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name: name
  };
};

document.getElementById('increment')
.addEventListener('click', () => {
  store.dispatch(inc1());
});

document.getElementById('decrement')
.addEventListener('click', () => {
  store.dispatch(dec(3));
});

document.getElementById('changeName')
.addEventListener('click', () => {
  store.dispatch(changeName(document.getElementById('name').value));
});
