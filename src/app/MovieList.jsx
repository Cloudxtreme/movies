import React, { Component, PropTypes } from 'react';
import styles from './MovieList.css';

export default class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <section className={styles.movieList}>
        {movies.length > 0 && <h2>Search Results</h2>}
        <ul>
          {movies.map((movie, i) => <li key={i}>{movie['Title']}</li>)}
        </ul>
      </section>
    )
  }
}

MovieList.PropTypes = {
  movies: PropTypes.array.isRequired
};
