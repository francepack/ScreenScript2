import React, { Component } from 'react';
import Games from "./Games";
import Game from "./Game";
import '../css/home.css';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  // renderGames = (games) => {
  //   if (this.props.games) {
  //     return this.props.games.map(game => (
  //       <li
  //         onClick={(e) => this.props.selectGame(e.target.id)}
  //         key={game.name}
  //         id={game.id}
  //         >{game.name}
  //       </li>
  //     ))
  //   }
  // }

  viewControl = () => {
    if (this.props.currentGameId) {
      return (
        <Game />
      )
    } else {
      console.log("yes")
      return (
        <Games
          games={this.props.games}
          userName={this.props.userName}
          selectGame={this.props.selectGame}
        />
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
