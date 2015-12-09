import fetch from 'isomorphic-fetch';

export const SELECT_MOVIE = 'SELECT_MOVIE';
export const REQUEST_MOVIE = 'REQUEST_MOVIE';
export const RECEIVE_MOVIE = 'RECEIVE_MOVIE';
export const SAVE_MOVIE = 'SAVE_MOVIE';

export function selectMovie(movie) {
  return {
    type: SELECT_MOVIE,
    payload: { movie: movie },
    error: false
  }
}
export function requestMovie(movie) {
  return {
    type: REQUEST_MOVIE,
    payload: { movie: movie },
    error: false
  }
}
export function receiveMovie(movie, json) {
  return {
    type: RECEIVE_MOVIE,
    payload: {
      movie: movie,
      json: json
    },
    error: false
  }
}
export function fetchMovie(movie) {
  return function(dispatch) {
    dispatch(requestMovie(movie))
    const encodedMovie = encodeURIComponent(movie);
    return fetch(`http://www.omdbapi.com/?t=${encodedMovie}`)
           .then(response => response.json())
           .then(json => dispatch(receiveMovie(movie, json)));
  }
}
export function saveMovie(movie) {
  return {
    type: RECEIVE_MOVIE,
    payload: { movie: movie },
    error: false
  }
}
