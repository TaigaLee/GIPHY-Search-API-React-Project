import React from "react";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log("submitted");
  };

  handleInputChange = event => {
    let searchTerm = this.state.searchTerm;
    searchTerm = event.target.value;
    this.setState({
      searchTerm: searchTerm
    });
    this.props.handleSearchTerm(searchTerm);
  };

  render() {
    return (
      <div className="SearchBar-div">
        <h2>Search Gifs!</h2>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleInputChange} />
        </form>
      </div>
    );
  }
}

export default SearchBar;
