import React, { Component } from 'react';
import './App.css';
import gameSets from './assets/sampledata.js';
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'

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

  loginControl = () => {
    if (this.state.isLoggedIn) {
      return(
        <Home />
      )
    } else {
      return (
        <Login />
      )
    }
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
        {this.loginControl()}
      </div>
    );
  }
}

export default App;
