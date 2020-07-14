import React, { Component } from 'react';
import gameSets from '../assets/sampledata.js';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // currentGroup: "",
      user: "",
      password: "",
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
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
