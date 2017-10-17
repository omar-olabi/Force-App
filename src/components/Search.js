import React, { Component } from 'react';
import '../styles/Search.css';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    };
    this.searchUpdate = this.searchUpdate.bind(this);
    this.startSearch = this.startSearch.bind(this);
  }

  searchUpdate(event) {
    this.setState({
      searchValue: event.target.value
    });
  }

  startSearch() {
    this.setState({ searchValue: '' });
    //TO DO pass search value to app
  }

  render() {
    return (
      <div className="fa-component-search">
        <input
          type="text"
          onChange={this.searchUpdate}
          value={this.state.searchValue}
        />
      <button onClick={this.startSearch}>Search</button>
      </div>
    );
  }

}
export default Search;
