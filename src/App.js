import React, { Component } from 'react';
import './App.css';
import gameSets from './assets/sampledata.js';
import Header from './components/Header'
import Home from './components/Home'

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      isLoading: false,
      currentGameId: "",
      isLoggedIn: false,
      currentGroupId: "",
      games: [],
    };
  }

  // componentDidMount() {
  //   this.setState({ games: gameSets.})
  // }

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
