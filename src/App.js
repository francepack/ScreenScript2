import React, { Component } from 'react';
import './css/App.css';
import mockGameData from './assets/mockGameData.js';
import mockEmployeeData from './assets/mockEmployeeData.js';
import mockCompanyData from './assets/mockCompanyData.js';
import Header from './Components/Header';
import Home from './Components/Home';
import CompanySelect from './Components/CompanySelect';
import Login from './Components/Login';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      isLoading: false,
      currentGameId: "",
      isLoggedIn: false,
      currentCompanyId: "",
      companies: [],
      games: [],
      userName: "",
    };
  }

  // componentDidMount() {
  //   this.setState({ games: gameSets.})
  // }

  setError = message => {
    this.setState({ error: message });
  }

  refreshError = () => {
    this.setState({ error: "" })
  }

  viewControl = () => {
    if (this.state.isLoggedIn && this.state.currentCompanyId) {
      console.log(this.state.games)
      return (
        <Home
          games={this.state.games}
          currentGameId={this.state.currentGameId}
          selectGame={this.selectGame}
          userName={this.state.userName}
        />
      )
    }
    else if (this.state.isLoggedIn && !this.state.currentCompanyId) {
      return (
        <CompanySelect
          setError ={this.setError}
          selectCompany={this.selectCompany}
          companies={this.state.companies}
        />
      )
    } else {
      return (
        <Login
          setError ={this.setError}
          currentGroupId={this.state.currentGroupId}
          login={this.login}
          setUserName={this.setUserName}
        />
      )
    }
    // else {
      // return (
      //   <Groups
      //     selectGroup={this.selectGroup}
      //   />
      // )
    // }
  }

  login = (companies) => {
    if (companies.length === 1) {
      const company = this.findCompany(companies[0]);
      this.setState({ isLoggedIn: true, companies: companies, currentCompanyID: company.id });
    } else {
      this.setState({ isLoggedIn: true, companies: companies });
    }
  }

  setUserName = (name) => {
    this.setState({ userName: name })
  }

  selectGame = (gameId) => {
    this.setState({ currentGameId: gameId });
  }

  selectCompany = (companyName) => {
    const company = this.findCompany(companyName);
    const games = this.findCompanyGames(company.id);
    this.setState({ currentCompanyId: company.id, games: games });
  }

  findCompanyGames = (companyId) => {
    return mockGameData.filter(game => game.companyId === companyId);
  }

  findCompany = (companyName) => {
    return mockCompanyData.find(company => company.name === companyName);
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
        {this.viewControl()}
      </div>
    );
  }
}

export default App;
