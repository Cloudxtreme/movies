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
    const foo = [...action.payload.json['Search'].map(movie => Object.assign({}, movie, { visible: true }))];
    console.log(foo);
    return foo;
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
