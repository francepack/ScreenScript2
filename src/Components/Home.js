import React, { Component } from 'react';
import Games from "./Games";
import Game from "./Game";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  renderGames = (games) => {
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

  viewControl = () => {
    if (!this.props.currrentGame) {
      console.log("no game")
      return (
        <Games />
      )
    } else {
      console.log("yes")
      return (
        <Game />
      )
    }
  }


  render() {
    return (
      <div className="home">
        {this.viewControl()}
      </div>
    )
  }
}

export default Home;
