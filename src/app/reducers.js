import { SEARCH, REQUEST, RECEIVE, SAVE } from './actions';
import { combineReducers } from 'redux';

/*
  {
    title: '',
    year: '',
    genre: '',
    director: '',
    actor: '',
    plot: '',
    image: '',
    metascore: '',
    imdbRating: '',
    visible:
  }
*/
const initialState = {
  query: '',
  movies: [],
  library: []
};

function query(state = initialState.query, action) {
  switch(action.type) {
  case SEARCH:
    return action.payload.query;
  default:
    return state;
  }
}

function movies(state = initialState.movies, action) {
  switch(action.type) {
  case REQUEST:
    return state;
  case RECEIVE:
    if (!action.payload.json['Search']) return [];
    return [...action.payload.json['Search'].map(movie => {
      const poster = movie['Poster'] && movie['Poster'].match(/^https?/) ? movie['Poster'] : 'fallback.png';
      return Object.assign({}, movie, { Poster: poster, visible: true })
    })];
  case SAVE:
    console.log(action.payload.index, action.payload.movie);
    return [...state.slice(0, action.payload.index),
            Object.assign({}, action.payload.movie, { saved: true }),
            ...state.slice(action.payload.index + 1)];
  default:
    return state;
  }
}

function library(state = initialState.library, action) {
  switch(action.type) {
  case SAVE:
    return [...state, action.payload.movie];
  default:
    return state;
  }
}

const rootReducer = combineReducers({ query, movies, library });
export default rootReducer;
