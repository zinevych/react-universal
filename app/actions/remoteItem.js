import fetch from 'isomorphic-fetch';

export const REQUEST_POST = 'REQUEST_POST';
function requestPost(id) {
  return {
    type: REQUEST_POST,
    id: id
  }
}
export const RECEIVE_POST = 'RECEIVE_POST';
function receivePost(json) {
  return {
    type: RECEIVE_POST,
    item: json
  }
}

export function fetchRemoteItem(id) {
  return function(dispatch) {
    dispatch(requestPost(id));
    return fetch('http://jsonplaceholder.typicode.com/posts/' + id)
      .then(response => {
        return response.json()
      })
      .then(json => dispatch(receivePost(json))
    )
  }
}