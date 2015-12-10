import React, { Component, PropTypes } from 'react';
import styles from './MovieList.css';

export default class MovieList extends Component {
  render() {
    const { library } = this.props;
    return (
      <section>
        {library.length > 0 && <h2>Your Library</h2>}
        <ul className={styles.list}>
          {library.map((movie, index) =>
            <li className={styles.movie} key={index}>
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
  library: PropTypes.array.isRequired
};
