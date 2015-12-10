import React, { Component, PropTypes } from 'react';

export default class Library extends Component {
  render() {
    const { library } = this.props;
    return (
      <section>
        {library.length > 0 && <h2>Your Library</h2>}
        <ul>
          {library.map(movie => <li>{movie}</li>)}
        </ul>
      </section>
    );
  }
}

Library.PropTypes = {
  library: PropTypes.array.isRequired
};
