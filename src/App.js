import React, { Component } from 'react';
import './App.css';
import mockGameData from './assets/mockGameData.js';
import mockEmployeeData from './assets/mockEmployeeData.js';
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
      currentCompanyId: "",
      companies: [],
      games: [],
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
      return (
        <Home />
      )
    }
    else if (this.state.isLoggedIn && !this.state.currentCompanyId) {
      return (
        <CompanySelect
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
      this.setState({ isLoggedIn: true, companies: companies, currentGroupID: companies[0] })
    } else {
      this.setState({ isLoggedIn: true, companies: companies })
    }
  }

  selectCompany = (companyId) => {
    this.setState({ currentCompanyId: companyId })
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
