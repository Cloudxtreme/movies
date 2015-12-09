import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { selectMovie, fetchMovie } from './actions';
import MovieSelector from './MovieSelector';
import MovieData from './MovieData';
import styles from './app.css';

class App extends Component {
  componentDidMount() {
    const { dispatch, selectedMovie } = this.props;
    dispatch(fetchMovie(selectedMovie));
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedMovie !== this.props.selectedMovie) {
      const { dispatch, selectedMovie } = this.props;
      dispatch(fetchMovie(selectedMovie));
    }
  }
  render() {
    const { dispatch, selectedMovie, selectedMovieData } = this.props;
    return (
      <div className={styles.app}>
        <h1>MoviesConnected</h1>
        <MovieSelector onSelectClick={movie => {
            dispatch(selectMovie(movie));
            dispatch(fetchMovie(movie));
          }} selectedMovie={selectedMovie} />
        <MovieData selectedMovieData={selectedMovieData} />
      </div>
    )
  }
}

App.PropTypes = {
  selectedMovie: PropTypes.string.isRequired,
  selectedMovieData: PropTypes.string
};

function select(state) {
  return {
    selectedMovie: state.selectedMovie,
    selectedMovieData: JSON.stringify(state.selectedMovieData)
  };
}

export default connect(select)(App);
