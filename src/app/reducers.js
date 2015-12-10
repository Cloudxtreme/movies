import { QUERY, REQUEST, RECEIVE, SAVE } from './actions';
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
  case QUERY:
    return action.payload.query;
  default:
    return state;
  }
}

function movies(state = initialState.movies, action) {
  switch(action.type) {
  case REQUEST:
  case RECEIVE:
    return Object.assign({}, action.payload.json);
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
