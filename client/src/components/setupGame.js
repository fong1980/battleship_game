import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { setupMyBoard } from "../actions/setupGame";

import {
  // shipsEnemyBoard,
  initalstateMyBoard,
  initalstateEnemyBoard
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

  handleClick(initalstateMyBoard) {
    console.log("esaf");
    this.props.setupMyBoard(initalstateMyBoard);
  }

  render() {
    return (
      <div className="">
        setup game <br />
        {initalstateMyBoard}
        <br />
        <br />
        <br />
        <Link to={`/game`} onClick={() => this.handleClick(initalstateMyBoard)}>
          <button>go to game</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({});
export default connect(
  mapStateToProps,
  { setupMyBoard }
)(SetupGame);
