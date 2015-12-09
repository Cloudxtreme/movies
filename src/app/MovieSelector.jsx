import React, { Component, PropTypes } from 'react';

export default class MovieSelector extends Component {
  handleSearch(e) {
    const node = this.refs.input;
    const nextSelectedMovie = node.value.trim();
    this.props.onSelectClick(nextSelectedMovie);
    node.value = '';
  }
  handleAdd(e) {
    console.log('Add to Library');
  }
  render() {
    return (
      <div>
        <h2>Selected Movie: {this.props.selectedMovie}</h2>
        <input ref='input' placeholder='Movie Name' type='text' />
        <button onClick={e => this.handleSearch(e)}>Search</button>
        <button onClick={e => this.handleAdd(e)}>Add to Library</button>
      </div>
    )
  }
}

MovieSelector.PropTypes = {
  onSelectClick: PropTypes.func.isRequired,
  selectedMovie: PropTypes.string.isRequired
};
