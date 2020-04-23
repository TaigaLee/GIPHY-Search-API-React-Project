import React from "react";
import GifContainer from "./GifContainer";

class SearchBar extends React.Component {
  constructor() {
    super();

    this.gifsList = [];

    this.state = {
      searchTerm: "",
      gifs: []
    };
  }

  async handleSearchTerm(term) {
    try {
      const response = await fetch(
        `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=Ipet2Zb55TIIVhs3tkohzJgAvztgq2UL`
      );
      const data = await response.json();
      this.gifsList = data;
      console.log(this.gifsList);
    } catch (err) {
      console.log(err);
    }
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
    this.handleSearchTerm();
  };

  render() {
    return (
      <div className="SearchBar-div">
        <h2>Search Gifs!</h2>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleInputChange} />
        </form>
        {/* <GifContainer gifs={this.gifsList} /> */}
      </div>
    );
  }
}

export default SearchBar;
