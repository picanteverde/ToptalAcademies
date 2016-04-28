import axios from 'axios';

export const PERSONS_REQUEST = 'PERSONS_REQUEST';
export const PERSONS_RECEIVE = 'PERSONS_RECEIVE';
export const PERSONS_FAIL = 'PERSONS_FAIL';

const urls = {
  'list': '/api/persons',
  'add': '/api/persons/add',
  'del': '/api/persons/del',
  'edit': '/api/persons/edit'
};

function request(name, data){
  return {
    type: PERSONS_REQUEST,
    name: name,
    data: data
  };
}

function receive(name, data){
  return {
    type: PERSONS_RECEIVE,
    name: name,
    data: data
  };
}

function fail(name, data){
  return {
    type: PERSONS_FAIL,
    name: name,
    data: data
  };
}

export function fetch(name, data){
  return (dispatch) => {
    dispatch(request(name, data));
    return axios.post(urls[name], data).then(res => {
      dispatch(receive(name, res.data));
    }).catch(err => {
      if (err instanceof Error) {
        // Something happened in setting up the request that triggered an Error
        dispatch(fail(name, err.message));
      } else {
        // The request was made, but the server responded with a status code
        // that falls out of the range of 2xx
        dispatch(fail(name, 'Server status' + err.status));
      }
    });
  };
}
