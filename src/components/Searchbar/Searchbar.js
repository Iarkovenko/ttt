import { Component } from 'react';
import s from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleNameChange = ({ target }) => {
    this.setState({ query: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.query.trim() === '') {
      alert('Enter your search');
      return;
    }

    this.props.onSearch(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form onSubmit={this.handleSubmit} className={s.SearchForm}>
          <input
            className={s.Input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.search}
            onChange={this.handleNameChange}
          />
          <button type="submit" className={s.Button}>
            <span className={s.ButtonLabel}>Search</span>
          </button>
        </form>
      </header>
    );
  }
}

export default Searchbar;
