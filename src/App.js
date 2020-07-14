import React, { Component } from 'react';
import './App.css';
import gameSets from './assets/sampledata.js';
import Header from './components/Header';
import Home from './components/Home';
import Groups from './components/Groups';
import Login from './components/Login';

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
    } else if (this.state.currentGroupId && !this.state.isLoggedIn) { 
      return (
        <Login 
          currentGameId={this.state.currentGameId}
        />
      )
    } else {
      return (
        <Groups
          selectGroup={this.selectGroup}
        />
      )
    }
  }

  selectGroup = (groupId) => {
    this.setState({ currentGroupId: groupId })
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
