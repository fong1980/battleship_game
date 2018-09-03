import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { setupBoard } from "../actions/setupGame";

import {
  // shipsEnemyBoard,
  initalstateMyBoard,
  initalstateEnemyBoard,
  myShips
} from "../logicConstants/logicConstants";

// import "./game.css";

class SetupGame extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      myBoard: initalstateMyBoard,
      EnemyBoard: initalstateEnemyBoard
    };
  }

  handleClick(myShips) {
    console.log(myShips);

    this.props.setupBoard(myShips);
  }

  render() {
    return (
      <div className="">
        setup game <br />
        {/* {myShips} */}
        <br />
        <br />
        <br />
        <Link to={`/game`} onClick={() => this.handleClick(myShips)}>
          <button>go to game</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({});
export default connect(
  mapStateToProps,
  {
    setupBoard
  }
)(SetupGame);
