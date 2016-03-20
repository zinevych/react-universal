import fetch from 'isomorphic-fetch';

export const REQUEST_DATA = 'REQUEST_DATA';
function requestPosts() {
  return {
    type: REQUEST_DATA
  }
}

export const RECEIVE_DATA = 'RECEIVE_DATA';
function receivePosts(json) {
  return {
    type: RECEIVE_DATA,
    items: json
  }
}

export function fetchRemoteItems() {
  return function(dispatch) {
    dispatch(requestPosts());

    return fetch('http://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => dispatch(receivePosts(json))
    )
  }
}