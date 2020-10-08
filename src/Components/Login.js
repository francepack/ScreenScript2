import React, { Component } from 'react';
import mockGameData from '../assets/mockGameData.js';
import mockEmployeeData from '../assets/mockEmployeeData.js';

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
    let matchingEmployees = [];
    mockEmployeeData.forEach(employee => {
      if (employee.name === username) {
        matchingEmployees.push(employee)
      }
    });
    if (matchingEmployees.length = 0) {
      console.log('run 123')
      this.props.setError("User not found")
    }
    console.log(matchingEmployees)
    let companiesToAccess = [];
    console.log(matchingEmployees)
    matchingEmployees.forEach(employee => {
      console.log('run 1')
      if (employee.password === password) {
        console.log('run 2')
        companiesToAccess.push(employee.company)
      }
    })
    console.log(companiesToAccess)
    if (companiesToAccess.length = 0) {
      this.props.setError("Incorrect Password")
    }
    console.log(companiesToAccess);

   //
   //  const data = {
   //    users: users,
   //    username: username,
   //    password: password
   //  }
   // this.validateUser(data)
  }

  validateUser = (data) => {
    console.log(this.state.username)

    data.users.forEach(user => {
      if (user.username === data.username) {
        if(user.password === data.password) {
          this.setLogin()
        } else {
          this.throwLoginError()
        }
      } else {
        this.throwLoginError()
      }
    })
  }

  setLogin = () => {
    console.log(this.state.username)
  }

  throwLoginError = () => {
    console.log(this.state.password)
  }

  render() {
    return (
      <div className="login">
        <h2>Please enter login information:</h2>
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <label>
              Username:
              <input
                type="text"
                name="username"
                onChange={this.handleChange}
              />
            </label>
            <label>
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
