import React, { Component } from 'react';
import Screenshare from './Screenshare';
import Script from './Script';
import ScriptSelector from './ScriptSelector';
import '../css/game.css'

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPicture: "",
      currentCategory: ""
    };
  }

  // timer pachage - easytimer.js
  render() {
    return (
      <div className="game">
        <div className="screenshare-container">
          <Screenshare />
        </div>
        <div className="scriptselector-container">
          <ScriptSelector />
        </div>
        <div className="script-container">
          <Script />
        </div>
      </div>
    );
  }
}

export default Game;
