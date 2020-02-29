import React from "react";
import "./App.css";
import playButton from "./img/play.svg";
import pauseButton from "./img/pause.svg";
import carti from "./midi/pissypamper.mp3";

class App extends React.Component {
  state = {
    playing: "▶️",
    track: ""
  };

  play = (song, title) => {
    switch (this.state.playing) {
      case "▶️":
        song.play();
        this.setState({ playing: "⏸", track: title });
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
    this.setState({ playing: "⏸", track: "" });
  };

  render() {
    return (
      <div className="App">
        <audio
          ref="audioRef"
          src={carti}
          id="carti"
          onEnded={() => this.trackEnd()}
        ></audio>
        <div className="Player">
          <span
            className="Player-header"
            onClick={() => console.log(this.picToggle())}
          >
            POP 5
          </span>
          <div id="playBox">
            <img
              id="controlButton"
              alt="null"
              src={this.picToggle()}
              onClick={() =>
                this.play(
                  this.refs.audioRef,
                  "playboi carti - pissy pamper ft. young nudy"
                )
              }
            ></img>
            <div
              id="emojiButton"
              onClick={() =>
                this.play(
                  this.refs.audioRef,
                  "playboi carti - pissy pamper ft. young nudy"
                )
              }
              text={this.state.playing}
            >
              {this.state.playing}
            </div>
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
