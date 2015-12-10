import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { selectMovie, deselectMovie, fetchMovie, saveMovie } from './actions';
import MovieSelector from './MovieSelector';
import MovieData from './MovieData';
import Library from './Library';
import styles from './app.css';

class App extends Component {
  componentDidMount() {
    const { dispatch, selectedMovie } = this.props;
    dispatch(fetchMovie(selectedMovie));
  }
  render() {
    const { dispatch, selectedMovie, uiSelectedMovie, selectedMovieData, library } = this.props;
    return (
      <div className={styles.app}>
        <h1>MoviesConnected</h1>
        <MovieSelector onChange={movie => dispatch(selectMovie(movie))} onSelectClick={movie => { dispatch(deselectMovie(movie)); dispatch(fetchMovie(movie)); }} onAddClick={movie => dispatch(saveMovie(movie))} selectedMovie={selectedMovie} uiSelectedMovie={uiSelectedMovie} />
        <MovieData selectedMovieData={selectedMovieData} />
        <Library library={library} />
      </div>
    )
  }
}

App.PropTypes = {
  selectedMovie: PropTypes.string.isRequired,
  selectedMovieData: PropTypes.string,
  library: PropTypes.array,
  uiSelectedMovie: PropTypes.string
};

function select(state) {
  return {
    selectedMovie: state.selectedMovie,
    selectedMovieData: JSON.stringify(state.selectedMovieData),
    library: state.library,
    uiSelectedMovie: state.uiSelectedMovie
  };
}

export default connect(select)(App);
