import React, { Component, PropTypes } from 'react';
import styles from './Searchbar.css';

export default class Searchbar extends Component {
  handleChange(e) {
    this.props.onChange(e.target.value);
  }
  handleGet(e) {
    const node = this.refs.input;
    const movie = node.value.trim();
    this.props.onGet(movie);
  }
  handleSave(e) {
    const node = this.refs.input;
    const movie = node.value.trim();
    this.props.onSave(movie);
  }
  render() {
    const { query } = this.props;
    return (
      <div className={styles.searchbar}>
        <input autoFocus
               className={styles.input}
               onChange={e => this.handleChange(e)}
               placeholder='Movie Name'
               ref='input'
               type='text'
               value={query} />
        <button className={styles.get}
                onClick={e => this.handleGet(e)}>Search</button>
        <button className={styles.save}
                onClick={e => this.handleSave(e)}>Add to Library</button>
      </div>
    )
  }
}

Searchbar.PropTypes = {
  onChange: PropTypes.func.isRequired,
  onGet: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired
};
