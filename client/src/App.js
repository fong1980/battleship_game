import React, { Component } from "react";

import "./App.css";
import Game from "./components/game";

class App extends Component {
  render() {
    return (
      <div className="App">
        Lets start BattleShips
        <Game />
      </div>
    );
  }
}

export default App;
