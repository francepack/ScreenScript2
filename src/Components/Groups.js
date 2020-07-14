import React, { Component } from 'react';
import gameSets from '../assets/sampledata.js';

export class Groups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
    };
  }

  componentDidMount() {
    let allGroups = []
    gameSets.forEach(set => {
      allGroups.push({
        name: set.name,
        id: set.id
      })
    })
    this.setState({ groups: allGroups })
  }

  renderGroupList = () => {
    if (this.state.groups) {
      return this.state.groups.map(group => (
        <li
          onClick={(e) => this.props.selectGroup(e.target.id)} 
          key={group.name}
          id={group.id}
          >{group.name}
        </li> 
      ))
    } 
  }
  
  render() {
    return (
      <div className="selectgroup">
        <h2>Hi there- Please select a group</h2>
        <div className="listbox-area">
          <div>
            <span>
              Groups:
            </span>
            <ul>
              {this.renderGroupList()}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Groups;
