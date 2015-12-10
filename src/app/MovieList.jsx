import React, { Component, PropTypes } from 'react';

export default class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        {movies.length > 0 && <h2>Search Results</h2>}
        <ul>
          {movies.map(movie => <li>{movie}</li>)}
        </ul>
      </section>
    )
  }
}

MovieList.PropTypes = {
  movies: PropTypes.string
};
