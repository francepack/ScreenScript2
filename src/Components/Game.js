import React, { Component } from 'react';
import Images from './Images';
import Screenshare from './Screenshare';
import Script from './Script';
import ScriptSelector from './ScriptSelector';

class Game() extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className="game">
        <div className="screenshare-container">
          <Screenshare />
        </div>
        <div className="images-container">
          <Images />
        </div>
        <div className="script-container">
          <Script />
        </div>
        <div className="scriptselector-container">
          <ScriptSelector />
        </div>
      </div>
    );
  }
}

export default Game;
