import React, { Component } from 'react';
import './App.css';
import mockGameData from './assets/mockGameData.js';
import mockEmployeeData from './assets/mockEmployeeData.js';
import mockCompanyData from './assets/mockCompanyData.js';
import Header from './components/Header';
import Home from './components/Home';
import CompanySelect from './components/CompanySelect';
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
      this.setState({ isLoggedIn: true, companies: companies, currentCompanyID: company.id })
    } else {
      this.setState({ isLoggedIn: true, companies: companies })
    }
  }

  selectCompany = (companyName) => {
    const company = this.findCompany(companyName);
    this.setState({ currentCompanyId: company.id })
    console.log(this.state.currentCompanyId)
    console.log(this.state)
  }

  findCompany = (companyName) => {
    let foundCompany = mockCompanyData.find(company => company.name === companyName);
    console.log(foundCompany)
    return foundCompany;
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
