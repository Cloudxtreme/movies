import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { selectMovie } from './actions';
import MovieSelector from './MovieSelector';

class App extends Component {
  render() {
    const { dispatch, selectedMovie } = this.props;
    return (
      <div>
        <h1>Hello world!</h1>
        <MovieSelector onSelectClick={movie => dispatch(selectMovie(movie))} selectedMovie={selectedMovie} />
      </div>
    )
  }
}

App.PropTypes = {
  selectedMovie: PropTypes.string.isRequired
}

function select(state) {
  return {
    selectedMovie: state.selectedMovie
  }
}

export default connect(select)(App);
