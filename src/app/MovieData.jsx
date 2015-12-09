import React, { Component, PropTypes } from 'react';

export default class MovieSelector extends Component {
  render() {
    const { selectedMovieData } = this.props;
    return (
      <code>
        {selectedMovieData}
      </code>
    )
  }
}

MovieSelector.PropTypes = {
  selectedMovieData: PropTypes.string
};
