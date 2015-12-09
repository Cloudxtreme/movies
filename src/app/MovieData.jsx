import React, { Component, PropTypes } from 'react';

export default class MovieSelector extends Component {
  render() {
    const { selectedMovieData } = this.props;
    return (
      <div>
        {selectedMovieData}
      </div>
    )
  }
}

MovieSelector.PropTypes = {
  selectedMovieData: PropTypes.string
};
