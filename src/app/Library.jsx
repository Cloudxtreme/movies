import React, { Component, PropTypes } from 'react';

export default class Library extends Component {
  render() {
    const { library } = this.props;
    return (
      <section>
        {library.length > 0 && <h2>Your Library</h2>}
        <ul>
          {library.map((movie, i) => <li key={i}>{movie['Title']}</li>)}
        </ul>
      </section>
    );
  }
}

Library.PropTypes = {
  library: PropTypes.array.isRequired
};
