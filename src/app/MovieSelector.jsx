import React, { Component, PropTypes } from 'react';
import styles from './app.css';

export default class MovieSelector extends Component {
  handleChange(e) {
    const node = this.refs.input;
    const nextSelectedMovie = node.value.trim();
    this.props.onChange(nextSelectedMovie);
  }
  handleSearch(e) {
    const node = this.refs.input;
    const nextSelectedMovie = node.value.trim();
    this.props.onSelectClick(nextSelectedMovie);
  }
  handleAdd(e) {
    const node = this.refs.input;
    const nextSelectedMovie = node.value.trim();
    this.props.onAddClick(nextSelectedMovie);
  }
  render() {
    return (
      <div>
        <h2>Selected Movie: <span className={styles.selectedMovie}>{this.props.selectedMovie}</span></h2>
        <input className={styles.selectedInput} onChange={e => this.handleChange(e)} ref='input' placeholder='Movie Name' type='text' />
        <button className={styles.selectedInput} onClick={e => this.handleSearch(e)}>Search</button>
        <button className={styles.selectedInput} onClick={e => this.handleAdd(e)}>Add to Library</button>
      </div>
    )
  }
}

MovieSelector.PropTypes = {
  onSelectClick: PropTypes.func.isRequired,
  selectedMovie: PropTypes.string.isRequired,
  uiSeletedMovie: PropTypes.string.isRequired
};
