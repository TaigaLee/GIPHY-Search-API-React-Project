import React from "react";

function GifContainer(props) {
  const listGifs = props.gifs.map(gif => (
    <li>
      <img src="{gif}" />
    </li>
  ));

  return (
    <React.Fragment>
      <ul>{listGifs}</ul>
    </React.Fragment>
  );
}

export default GifContainer;
