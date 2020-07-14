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

  // handleChange = () => {
  //  
  // }
  
  render() {
    return (
      <div className="login">
        <h2>Please enter login information:</h2>
        <div className="form">
          <form>
            <label>
              Username:
              <input type="text" name="username" />
            </label>
            <label>
              Password:
              <input type="text" name="password" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
