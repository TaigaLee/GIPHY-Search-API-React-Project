import React from "react";
import "./App.css";
import SearchBar from "./SearchBar";

class App extends React.Component {
  handleSearchTerm = searchTerm => {
    console.log(searchTerm);
  };

  render() {
    return (
      <div className="App">
        <SearchBar handleSearchTerm={this.handleSearchTerm} />
      </div>
    );
  }
}

export default App;
