import React, { Component, PropTypes } from 'react';

export default class MovieSelector extends Component {
  render() {
    const { selectedMovieData } = this.props;
    return (
      <section>
        <pre><code>{selectedMovieData}</code></pre>
      </section>
    )
  }
}

MovieSelector.PropTypes = {
  selectedMovieData: PropTypes.string
};
