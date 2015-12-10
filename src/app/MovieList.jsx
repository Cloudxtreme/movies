import React, { Component, PropTypes } from 'react';
import styles from './MovieList.css';

export default class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        {movies.length > 0 && <h2>Search Results</h2>}
        <ul className={styles.list}>
          {movies.map((movie, i) =>
            <li className={styles.movie} key={i}>
              <img alt={movie['Title']} src={movie['Poster']} />
              <div className={styles.copy}>
                <span className={styles.title}>{movie['Title']}</span>
                {' '}
                <span className={styles.year}>({movie['Year']})</span>
              </div>
            </li>)}
        </ul>
      </section>
    )
  }
}

MovieList.PropTypes = {
  movies: PropTypes.array.isRequired
};
