import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { search, get, save } from './actions';

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
        <h1>MoviesConnected</h1>
        <h2>
          Selected Movie:
          <span className={styles.query}>{firstMovie}</span>
        </h2>
        <Searchbar onSave={movie => dispatch(save(movie))}
                   onChange={movie => dispatch(search(movie))}
                   onGet={movie => dispatch(get(movie))}
                   query={query} />
        <MovieList movies={movies} />
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
    firstMovie: state.movies.filter(movie => movie.visible)[0],
    library: state.library,
    movies: state.movies.filter(movie => movie.visible),
    query: state.query
  };
}

export default connect(select)(App);
