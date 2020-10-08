import React, { Component } from 'react';
import mockGameData from '../assets/mockGameData.js';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // currentGroup: '',
      user: '',
      password: '',
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    if (name === 'user') {
      this.setState({ user: value })
    } else if (name === 'password') {
      this.setState({ password: value })
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    const { user, password } = this.state
    const users = mockGameData.forEach(set => {
      if (this.props.currentGroupId === set.id) {
        return set.users
      }
    })
    const data = {
      users: users,
      user: user,
      password: password
    }
   this.validateUser(data)
  }

  validateUser = (data) => {
    console.log(this.state.user)

    data.users.forEach(user => {
      if (user.username === data.user) {
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
    console.log(this.state.user)
  }

  throwLoginError = () => {
    console.log(this.state.password)
  }

  render() {
    return (
      <div className="login">
        <h2>Please enter login information:</h2>
        <div className="form">
          <form>
            <label>
              Username:
              <input
                type="text"
                name="user"
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
            <input type="submit" value="Submit" onSubmit={this.handleSubmit} />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
