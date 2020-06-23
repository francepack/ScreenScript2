import React, { Component } from 'react';
import './App.css';
import gameSets from './assets/sampledata.js';
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
    };
  }

  setError = message => {
    this.setState({ error: message });
  }

  render() {
    return (
      <div className="App">
        <Header />
        {this.state.error &&
          <div className="error">
            {this.state.error}
          </div>
        }
        <Home />
      </div>
    );
  }
}

export default App;
