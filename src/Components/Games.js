import React, { Component } from 'react';

class Games extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  renderGames = () => {
    console.log(this.props.games)
    if (this.props.games) {
      return this.props.games.map(game => (
        <li
          onClick={(e) => this.props.selectGame(e.target.id)}
          key={game.name}
          id={game.id}
          >{game.name}
        </li>
      ))
    }
  }

  render() {
    return (
      <div className="games">
        <p>Welcome {this.props.userName}!</p>
        {this.renderGames()}
      </div>
    )
  }
}

export default Games;
