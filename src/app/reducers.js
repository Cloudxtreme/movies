import { SELECT_MOVIE, selectMovie } from './actions';
import { combineReducers } from 'redux';

const initialState = {
    selectedMovie: 'Spectre'
};

function selectedMovie(state = initialState.selectedMovie, action) {
  switch(action.type) {
  case SELECT_MOVIE:
    return action.payload.movie;
  default:
    return state;
  }
}

const rootReducer = combineReducers({
  selectedMovie
});
export default rootReducer;
