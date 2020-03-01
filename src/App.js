import React from "react";
import "./App.css";
import playButton from "./img/play.svg";
import pauseButton from "./img/pause.svg";
import carti from "./midi/pissypamper.mp3";
import uplifter from "./midi/uplifter.mp3";

class App extends React.Component {
  state = {
    playing: "▶️",
    track: ""
  };

  currentTrack = () => {
    return uplifter;
  };

  play = (song, title) => {
    switch (this.state.playing) {
      case "▶️":
        song.play();
        this.setState({ playing: "⏸", track: title });
        console.log("console");
        break;
      case "⏸":
        song.pause();
        this.setState({ playing: "▶️", track: title });
        break;
      default:
        console.log("fuck");
    }
  };

  picToggle = () => {
    while (this.state.playing === "▶️") {
      return playButton;
    }
    while (this.state.playing === "⏸") {
      return pauseButton;
    }
  };

  trackEnd = () => {
    this.setState({ playing: "▶️", track: "" });
  };

  render() {
    return (
      <div className="App">
        <audio
          ref="audioRef"
          src={this.currentTrack()}
          id="carti"
          onEnded={() => this.trackEnd()}
        ></audio>
        <div className="Player">
          <span className="Player-header">POP 5</span>
          <div id="playBox">
            <img
              id="controlButton"
              alt="play/pause button"
              src={this.picToggle()}
              onClick={() => this.play(this.refs.audioRef, this.currentTrack())}
            ></img>
          </div>
          <span className="Current-track">{this.state.track}</span>
        </div>
        <div className="Player">
          <span className="Player-header">pop 4</span>
        </div>
      </div>
    );
  }
}

export default App;
