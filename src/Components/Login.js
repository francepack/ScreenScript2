import React, { Component } from 'react';
import mockGameData from '../assets/mockGameData.js';
import mockEmployeeData from '../assets/mockEmployeeData.js';
import '../css/login.css';


export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = e => {
    console.log(this.state)
    const { name, value } = e.target;
    if (name === 'username') {
      this.setState({ username: value })
    } else if (name === 'password') {
      this.setState({ password: value })
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    const { username, password } = this.state
    if (!username || !password) {
      this.props.setError("Must enter a username and password");
    } else {
      this.validateUser();
    }
  }

  validateUser = () => {
    const { username, password } = this.state
    let accessedCompanies = [];
    mockEmployeeData.forEach(employee => {
      if (employee.name === username && employee.password === password) {
        accessedCompanies.push(employee.company);
      }
    });
    if (accessedCompanies.length === 0) {
      this.props.setError("Incorrect Username/Password Combo");
    } else {
      this.props.setUserName(username);
      this.props.login(accessedCompanies);
    }
  }

  render() {
    return (
      <div className="login">
        <h2>Please enter login information:</h2>
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <label className="login_input">
              Username:
              <input
                type="text"
                name="username"
                onChange={this.handleChange}
              />
            </label>
            <label className="login_input">
              Password:
              <input
                type="text"
                name="password"
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
