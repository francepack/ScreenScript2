import React, { Component } from 'react';
import mockGameData from '../assets/mockGameData.js';

export class CompanySelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // groups: [],
    };
  }

  // componentDidMount() {
  //   let allGroups = []
  //   mockGameData.forEach(set => {
  //     allGroups.push({
  //       name: set.name,
  //       id: set.id
  //     })
  //   })
  //   this.setState({ groups: allGroups })
  // }

  renderCompanyList = () => {
      return this.props.companies.map(company => (
        <li
          onClick={(e) => this.props.selectCompany(e.target.id)}
          key={company}
          id={company}
        >
          {company}
        </li>
      ))
  }

  render() {
    return (
      <div className="selectcompany">
        <h2>Hi there- Please select a group</h2>
        <div className="listbox-area">
          <div>
            <span>
              Groups:
            </span>
            <ul>
              {this.renderCompanyList()}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default CompanySelect;
