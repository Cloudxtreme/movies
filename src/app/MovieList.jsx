import React, { Component, PropTypes } from 'react';
import styles from './MovieList.css';

export default class MovieList extends Component {
  handleSave(index) {
    this.props.onSave(index);
  }
  render() {
    const { movies } = this.props;
    return (
      <section>
        {movies.length > 0 && <h2>Search Results</h2>}
        <ul className={styles.list}>
          {movies.map((movie, index) =>
            <li className={styles.movie} key={index}>
              {movie.saved && <button className={styles.saved}>★</button>}
              {!movie.saved && <button className={styles.save} onClick={e => this.handleSave(index)}>+</button>}
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
  movies: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired
};
