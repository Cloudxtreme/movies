import { SELECT_MOVIE, REQUEST_MOVIE, RECEIVE_MOVIE, selectMovie } from './actions';
import { combineReducers } from 'redux';

const initialState = {
    selectedMovie: 'There Will Be Blood',
    selectedMovieData: {
      "Title": "There Will Be Blood",
      "Year": "2007",
      "Rated": "R",
      "Released": "25 Jan 2008",
      "Runtime": "158 min",
      "Genre": "Drama",
      "Director": "Paul Thomas Anderson",
      "Writer": "Paul Thomas Anderson (screenplay), Upton Sinclair (novel)",
      "Actors": "Daniel Day-Lewis, Martin Stringer, Matthew Braden Stringer, Jacob Stringer",
      "Plot": "A story of family, religion, hatred, oil and madness, focusing on a turn-of-the-century prospector in the early days of the business.",
      "Language": "English, American Sign Language",
      "Country": "USA",
      "Awards": "Won 2 Oscars. Another 97 wins & 121 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjA0NjE1ODEyNV5BMl5BanBnXkFtZTcwNDIzMzE5NQ@@._V1_SX300.jpg",
      "Metascore": "92",
      "imdbRating": "8.1",
      "imdbVotes": "345,411",
      "imdbID": "tt0469494",
      "Type": "movie",
      "Response": "True"
    }
};

function selectedMovie(state = initialState.selectedMovie, action) {
  switch(action.type) {
  case SELECT_MOVIE:
    return action.payload.movie;
  default:
    return state;
  }
}

function selectedMovieData(state = initialState.selectedMovieData, action) {
  switch(action.type) {
  case RECEIVE_MOVIE:
  case REQUEST_MOVIE:
    return Object.assign({}, state, action.payload.json);
  default:
    return state;
  }
}

const rootReducer = combineReducers({
  selectedMovie,
  selectedMovieData
});
export default rootReducer;
