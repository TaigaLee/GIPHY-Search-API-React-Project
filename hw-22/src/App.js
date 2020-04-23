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

  // handleSearchTerm(term) {
  //   const response = fetch(
  //     `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=Ipet2Zb55TIIVhs3tkohzJgAvztgq2UL`
  //   );
  // }
  //
  // async handleSearchTerm(term) {
  //   try {
  //     const response = await fetch(
  //       `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=Ipet2Zb55TIIVhs3tkohzJgAvztgq2UL`
  //     );
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  //
  // async componentDidMount() {
  //   try {
  //     const response = await this.handleSearchTerm();
  //     const data = await response.data();
  //     this.setState({
  //       gifs: data
  //     });
  //     console.log(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  render() {
    return (
      <div className="App">
        <SearchBar />
      </div>
    );
  }
}

export default App;
