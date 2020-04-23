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

  async gettingGifs(searchTerm) {
    try {
      const response = await fetch(
        `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=Ipet2Zb55TIIVhs3tkohzJgAvztgq2UL&limit=6`
      );

      const data = await response.json();
      this.setState({
        gifs: data
      });
    } catch (err) {
      console.log(err);
    }
  }

  componentDidMount() {
    this.gettingGifs("");
  }

  render() {
    return (
      <div className="App">
        <SearchBar onChange={searchTerm => this.gettingGifs(searchTerm)} />
        <GifContainer gifs={this.state.gifs.data} />
      </div>
    );
  }
}

export default App;
