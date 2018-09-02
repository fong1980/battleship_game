import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "./App.css";
import Game from "./components/game";
import SetupGame from "./components/setupGame";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          Lets start BattleShips
          {/* <Route exact path="/login" component={LoginPage} /> */}
          {/* <Route exact path="/" render={() => <Redirect to="/batchs" />} /> */}
          <Route exact path="/setup" component={SetupGame} />
          <Route exact path="/game" component={Game} />
          <Route exact path="/" render={() => <Redirect to="/setup" />} />
          {/* <SetupGame /> */}
          {/* <Game /> */}
        </div>
      </Router>
    );
  }
}

export default App;
