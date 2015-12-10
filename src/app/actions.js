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
export function save(index, movie) {
  return {
    type: SAVE,
    payload: { index: index, movie: movie },
    error: false
  }
}
export function saveAtIndex(index) {
  return function(dispatch, getState) {
    const movies = getState().movies;
    const movie = movies[index];
    if (movie) {
      dispatch(save(index, movie));
      return movie;
    }
    throw new Error('Movie not found.');
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
