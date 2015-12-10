import React, { Component, PropTypes } from 'react';
import styles from './Searchbar.css';

export default class Searchbar extends Component {
  handleChange(e) {
    this.props.onChange(e.target.value);
  }
  handleGet(e) {
    e.preventDefault();
    const node = this.refs.input;
    const movie = node.value.trim();
    console.log(e, node, movie);
    this.props.onGet(movie);
  }
  render() {
    const { query } = this.props;
    return (
      <form className={styles.searchbar} onSubmit={e => this.handleGet(e)}>
        <input autoFocus
               className={styles.input}
               onChange={e => this.handleChange(e)}
               placeholder='Movie Name'
               ref='input'
               type='text'
               value={query} />
        <button className={styles.get} onClick={e => this.handleGet(e)}>Search</button>
      </form>
    )
  }
}

Searchbar.PropTypes = {
  onChange: PropTypes.func.isRequired,
  onGet: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired
};
