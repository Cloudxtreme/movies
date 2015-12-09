import React, { Component, PropTypes } from 'react';

export default class Playlist extends Component {
  render() {
    const { playlist } = this.props;
    return (
      <ul>
        {playlist.map(movie => <li>{movie}</li>)}
      </ul>
    );
  }
}

Playlist.PropTypes = {
  playlist: PropTypes.array.isRequired
};
