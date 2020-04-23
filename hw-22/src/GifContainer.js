import React from "react";
import { Grid, Image } from "semantic-ui-react";
import "./App.css";

function GifContainer(props) {
  if (props.gifs !== undefined) {
    const listGifs = props.gifs.map((gif, i) => (
      <Grid.Column>
        <img
          className="GifContainer-images"
          src={gif.images.original.url}
          alt={i}
        />
      </Grid.Column>
    ));
    return (
      <div className="GifsContainer-div">
        <Grid>
          <Grid.Row columns={3}>{listGifs}</Grid.Row>
        </Grid>
      </div>
    );
  } else {
    return <h2> Nothing here yet!</h2>;
  }
}

export default GifContainer;
