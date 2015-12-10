import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { search, get, saveAtIndex } from './actions';

import Searchbar from './Searchbar';
import MovieList from './MovieList';
import Library from './Library';
import styles from './app.css';

class App extends Component {
  componentDidMount() {
    const { dispatch, query } = this.props;
    dispatch(get(query));
  }
  render() {
    const { dispatch, firstMovie, library, movies, query } = this.props;
    return (
      <div className={styles.app}>
        <h1>Movie Management<br /><strong>Simplified</strong></h1>
        <Searchbar onChange={movie => dispatch(search(movie))}
                   onGet={movie => dispatch(get(movie))}
                   query={query} />
        <MovieList movies={movies} onSave={index => dispatch(saveAtIndex(index))} />
        <Library library={library} />
      </div>
    )
  }
}

App.PropTypes = {
  dispatch: PropTypes.func.isRequired,
  firstMovie: PropTypes.object,
  library: PropTypes.array,
  movies: PropTypes.array,
  query: PropTypes.string.isRequired
};

function select(state) {
  return {
    dispatch: state.dispatch,
    library: state.library,
    movies: state.movies.filter(movie => movie.visible),
    query: state.query
  };
}

export default connect(select)(App);
