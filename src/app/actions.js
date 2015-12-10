import fetch from 'isomorphic-fetch';

// 0. Display proper title
// 1. Rename state
// 2. Use ?s= to display list
// 3. Drag to favorite
// 4. Click to favorite
// 5. LocalStorage
// 6. Service Worker

export const SEARCH = 'SEARCH';
export const REQUEST = 'REQUEST';
export const RECEIVE = 'RECEIVE';
export const SAVE = 'SAVE';

export function search(movie) {
  return {
    type: SEARCH,
    payload: { movie: movie },
    error: false
  }
}
export function request(movie) {
  return {
    type: REQUEST,
    payload: { movie: movie },
    error: false
  }
}
export function receive(movie, json) {
  return {
    type: RECEIVE,
    payload: { movie: movie, json: json },
    error: false
  }
}
export function save(movie) {
  return {
    type: SAVE,
    payload: { movie: movie },
    error: false
  }
}
export function get(movie) {
  return function(dispatch) {
    dispatch(request(movie))
    const encodedMovie = encodeURIComponent(movie);
    return fetch(`http://www.omdbapi.com/?s=${encodedMovie}`)
           .then(response => response.json())
           .then(json => dispatch(receive(movie, json)));
  }
}
