import React from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import GifContainer from "./GifContainer";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      gifs: []
    };
  }

  async handleSearchTerm(term) {
    try {
      const response = await fetch(
        `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=Ipet2Zb55TIIVhs3tkohzJgAvztgq2UL`
      );
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }

  componentDidMount() {
    const data = this.handleSearchTerm();

    this.setState({
      gifs: data
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar handleSearchTerm={this.handleSearchTerm} />
        <GifContainer gifs={this.state.gifs} />
      </div>
    );
  }
}

export default App;
