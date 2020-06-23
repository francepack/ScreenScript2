import React, { Component } from 'react';
import './App.css';
import gameSets from '../public/assets/sampledata.js';
import Header from './Components/Header'
import Home from './Components/Home'

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      isLoading: false,
      currentGameId: "",
      isLoggedIn: false,
      currentGroupId: "",
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
