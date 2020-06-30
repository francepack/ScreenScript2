import React, { Component } from 'react';
import gameSets from '../assets/sampledata.js';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      password: "",
      groups: [],
    };
  }

  componentDidMount() {
    let allGroups = []
    gameSets.forEach(set => {
      allGroups.push(set.name)
    })
    this.setState({ groups: allGroups })
  }

  createList = () => {
    this.groups.forEach(group => {
      return(
        <ul>{group}</ul>
      )
    })
  }
  
  render() {
    return (
      <div className="login">
        <h2>Hi there- what group are you logging in with?</h2>
        <div class="listbox-area">
          <div class="left-area">
            <span>
              Groups:
            </span>
            <ul id="groups-list"
                tabindex="0"
                role="listbox"
                aria-labelledby="ss_elem">
              
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
