import React, { Component, PropTypes } from 'react';

export default class MovieSelector extends Component {
  handleClick(e) {
    const node = this.refs.input;
    const nextSelectedMovie = node.value.trim();
    this.props.onSelectClick(nextSelectedMovie);
    node.value = '';
  }
  render() {
    return (
      <div>
        <h2>Selected Movie: {this.props.selectedMovie}</h2>
        <input ref='input' placeholder='Movie Name' type='text' />
        <button onClick={e => this.handleClick(e)}>Search</button>
      </div>
    )
  }
}

MovieSelector.PropTypes = {
  onSelectClick: PropTypes.func.isRequired,
  selectedMovie: PropTypes.string.isRequired
};
