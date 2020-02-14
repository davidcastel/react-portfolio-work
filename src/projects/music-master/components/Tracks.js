import React, { Component } from "react";

class Tracks extends Component {
  // boolean called playing: set to false
  // if false: currently pllay the audio and set it to true
  // if true, call the audio.pause method to pause the current audio object
  //   audio object so that we can pause it later
  // set audio to null
  //   playingPreviewUrl: the idea is to call pause when clicking on a different track
  // but also have the audio play for the next track play at once when the old track is being paused
  state = { playing: false, audio: null, playingPreviewUrl: null };

  playAudio = previewUrl => () => {
    //   pass the previewUrl itself
    const audio = new Audio(previewUrl);

    // check this.state.playing is current false using the bang operator
    if (!this.state.playing) {
      // if false, call the audio.play()
      audio.play();
      //  set state of playing to true
      //   set state of the audio
      this.setState({ playing: true, audio, playingPreviewUrl: previewUrl });
    } else {
      // pause the audio
      this.state.audio.pause();

      if (this.state.playingPreviewUrl === previewUrl) {
        //   set playing: false
        this.setState({ playing: false });
      } else {
        audio.play();
        this.setState({ audio, playingPreviewUrl: previewUrl });
      }
    }
  };

  trackIcon = track => {
    if (!track.preview_url) {
      return <span> N/A </span>;
    }
    if (
      this.state.playing &&
      this.state.playingPreviewUrl === track.preview_url
    ) {
      return <span> | | </span>;
    }
    return <span>&#9654;</span>;
  };

  // to return the jsx
  render() {
    // tracks will be passed down through props
    const { tracks } = this.props;

    return (
      <div>
        {tracks.map(track => {
          const { id, name, album, preview_url } = track;

          return (
            <div
              key={id}
              onClick={this.playAudio(preview_url)}
              className="track"
            >
              <img src={album.images[0].url} alt="" className="track-image" />
              <p className="track-text"> {name} </p>
              <p className="track-icon">{this.trackIcon(track)}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Tracks;
