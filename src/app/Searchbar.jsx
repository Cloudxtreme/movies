import React, { Component, PropTypes } from 'react';
import styles from './app.css';

export default class MovieSelector extends Component {
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
    return (
      <div>
        <input className={styles.input}
               onChange={e => this.handleChange(e)}
               ref='input'
               placeholder='Movie Name'
               type='text'
               value={this.props.query} />
        <button className={styles.input}
                onClick={e => this.handleGet(e)}>Search</button>
        <button className={styles.input}
                onClick={e => this.handleSave(e)}>Add to Library</button>
      </div>
    )
  }
}

MovieSelector.PropTypes = {
  onChange: PropTypes.func.isRequired,
  onGet: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  query: PropTypes.string
};
