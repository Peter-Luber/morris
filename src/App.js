import React from "react";
import "./App.css";
import helados from "./midi/pissypamper.mp3";

let audio = new Audio(helados);

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
    switch (this.state.playing) {
      case "▶️":
        return "https://521dimensions.com/img/open-source/amplitudejs/examples/single-song/play.svg";
      case "⏸":
        return "https://521dimensions.com/img/open-source/amplitudejs/examples/single-song/pause.svg";
      default:
        break;
    }
  };

  render() {
    return (
      <div className="App">
        <div className="Player">
          <span
            className="Player-header"
            onClick={() => console.log(this.picToggle())}
          >
            pop 5
          </span>
          <div id="playBox">
            <img
              id="controlButton"
              alt="null"
              src={this.picToggle()}
              onClick={() =>
                this.play(audio, "playboi carti - pissy pamper ft. young nudy")
              }
              playing="paused"
            ></img>
            <div
              id="emojiButton"
              playing="paused"
              onClick={() =>
                this.play(audio, "playboi carti - pissy pamper ft. young nudy")
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
