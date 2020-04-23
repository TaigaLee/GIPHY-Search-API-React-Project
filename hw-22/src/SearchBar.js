import React from "react";
import "./App.css";

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      searchTerm: ""
    };
  }

  handleSearchBarInput(searchTerm) {
    this.setState({
      searchTerm: searchTerm
    });
    this.props.onChange(searchTerm);
  }

  render() {
    return (
      <div className="SearchBar-div">
        <div className="SearchBar-header">
          <h2>Search For Gifs!</h2>
          <small>Simple React/API project created by Taiga Lee</small>
        </div>
        <input
          type="text"
          placeholder="Search GIFs"
          onChange={event => this.handleSearchBarInput(event.target.value)}
        />
      </div>
    );
  }
}
export default SearchBar;
