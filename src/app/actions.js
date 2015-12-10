import fetch from 'isomorphic-fetch';

// 3. Drag to favorite
// 4. Click to favorite
// 5. LocalStorage
// 6. Service Worker

export const SEARCH = 'SEARCH';
export const REQUEST = 'REQUEST';
export const RECEIVE = 'RECEIVE';
export const SAVE = 'SAVE';

export function search(query) {
  return {
    type: SEARCH,
    payload: { query: query },
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
