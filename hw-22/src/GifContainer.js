import React from "react";

function GifContainer(props) {
  if (props.gifs !== undefined) {
    console.log(props.gifs);
    const listGifs = props.gifs.map(gif => (
      <li key={gif.id}>
        <img src={gif.images.original.url} />
      </li>
    ));
    return <React.Fragment>{listGifs}</React.Fragment>;
  } else {
    return <h2> Nothing here yet!</h2>;
  }
}

export default GifContainer;
