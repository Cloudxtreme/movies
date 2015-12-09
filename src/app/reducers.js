import { SELECT_MOVIE, selectMovie } from './actions';

const initialState = {
    selectedMovie: 'Spectre'
};

function rootReducer(state = initialState, action) {
  switch(action.type) {
  case SELECT_MOVIE:
    return Object.assign({}, ...state, {
      selectedMovie: action.payload.movie
    });
  default:
    return state;
  }
}

export default rootReducer;
