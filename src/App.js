import React from "react";
import "./App.css";
import paused from "./img/play.svg";
import playing from "./img/pause.svg";
import nudy from "./midi/pissypamper.mp3";
import uplifter from "./midi/uplifter.mp3";

class App extends React.Component {
  state = {
    button: paused,
    title: "",
    current: 0,
    pop5: [
      {
        id: 1,
        title: "lex luger riser",
        url: uplifter
      },
      {
        id: 2,
        title: "young nudy - pissy pamper ft. playboi carti",
        url: nudy
      }
    ]
  };

  playPause = song => {
    if (this.state.button === paused) {
      song.play();
      this.setState({
        button: playing,
        title: this.state.pop5[this.state.current].title
      });
    } else if (this.state.button === playing && !this.refs.audioRef.ended) {
      song.pause();
      this.setState({
        button: paused
      });
    } else if (this.state.button === playing && this.refs.audioRef.ended) {
      song.play();
    }
  };

  endCycle = () => {
    this.setState(
      {
        title: this.state.pop5[this.state.current + 1].title,
        current: this.state.current + 1,
        button: paused
      },
      () => {
        this.refs.audioRef.load();
        this.playPause(this.refs.audioRef);
      }
    );
  };

  render() {
    return (
      <div className="App">
        <audio
          ref="audioRef"
          src={this.state.pop5[this.state.current].url}
          onEnded={() => this.endCycle()}
        ></audio>
        <div className="Player">
          <span className="Player-header">POP 5</span>
          <div id="playBox">
            <img
              id="controlButton"
              alt="play/pause button"
              src={this.state.button}
              onClick={() => this.playPause(this.refs.audioRef)}
            ></img>
          </div>
          <span className="Current-track">{this.state.title}</span>
        </div>
      </div>
    );
  }
}

export default App;
