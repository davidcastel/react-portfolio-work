import React, { Component } from "react";
import Search from "./Search";
import Artist from "./Artist";
import Tracks from "./Tracks";

const API_ADDRESS = "https://spotify-api-wrapper.appspot.com";

class App extends Component {
  state = { artist: null, tracks: [] };

  componentDidMount() {
    this.searchArtist("Bruno Mars");
  }

  searchArtist = artistQuery => {
    fetch(`${API_ADDRESS}/artist/${artistQuery}`)
      .then(response => response.json())
      .then(json => {
        // check is json.artist.total is graeter than 0
        if (json.artists.total > 0) {
          // get the artist, which is the result of json.artist.items[0]
          const artist = json.artists.items[0];

          // artist key with the artist value
          this.setState({ artist });

          // nested fetch
          // fetch the top tracks
          // first goes to the 'api address' => artist path => use the artist.id => then go to top-tracks
          fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
            // response object that we can return a json
            .then(response => response.json())
            // return the resulting json
            // update the tracks key with the inner json.tracks
            .then(json => this.setState({ tracks: json.tracks }))
            // add a catch error that will catch any error that is thrown around
            .catch(error => alert(error.message));
        }
      })
      .catch(error => alert(error.message));
  };

  render() {
    console.log("this.state", this.state);
    return (
      <div>
        <h2> Music Master </h2>
        <Search searchArtist={this.searchArtist} />
        <Artist artist={this.state.artist} />
        <Tracks tracks={this.state.tracks} />
      </div>
    );
  }
}

export default App;
