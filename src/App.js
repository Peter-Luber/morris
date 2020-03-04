import React from "react";
import "./App.css";
import playButton from "./img/play.svg";
import pauseButton from "./img/pause.svg";
import nudy from "./midi/pissypamper.mp3";
import uplifter from "./midi/uplifter.mp3";

class App extends React.Component {
  state = {
    button: playButton,
    title: "pop 5",
    current: 0,
    pop5: [
      {
        title: "lex luger riser",
        url: uplifter
      },
      {
        title: "young nudy - pissy pamper ft. playboi carti",
        url: nudy
      }
    ]
  };

  playPause = song => {
    if (this.state.button === playButton) {
      song.play();
      this.setState({
        button: pauseButton,
        title: this.state.pop5[this.state.current].title
      });
    } else if (this.state.button === pauseButton && !this.refs.audioRef.ended) {
      song.pause();
      this.setState({
        button: playButton
      });
    } else if (this.state.button === pauseButton && this.refs.audioRef.ended) {
      song.play();
    }
  };

  trackEnd = () => {
    if (this.refs.audioRef.ended) {
      this.setState({
        title: this.state.pop5[this.state.current + 1].title,
        current: this.state.current + 1
      });
    } else {
      this.setState({
        button: playButton,
        title: ""
      });
    }
  };

  endCycle = () => {
    this.trackEnd();
    console.log(this.refs.audioRef.ended);
    console.log(this.refs.audioRef);
    this.refs.audioRef.play();
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
          <span className="Current-track">
            {this.state.current + 1}
            <br></br>
            {this.state.title}
          </span>
        </div>
      </div>
    );
  }
}

export default App;
