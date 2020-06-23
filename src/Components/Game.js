import React from 'react';
import Images from './Images';
import Screenshare from './Screenshare';
import Script from './Script';
import ScriptSelector from './ScriptSelector';

function Game() {
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

export default Game;
