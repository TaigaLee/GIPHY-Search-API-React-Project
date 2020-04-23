import React from "react";

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
      <React.Fragment>
        <h2>Search for a gif!</h2>
        <input
          type="text"
          placeholder="Search GIFs"
          onChange={event => this.handleSearchBarInput(event.target.value)}
        />
      </React.Fragment>
    );
  }
}
export default SearchBar;
