import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {
  // shipsEnemyBoard,
  initalstateMyBoard,
  initalstateEnemyBoard
} from "../logicConstants/logicConstants";
import "./game.css";

class Game extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      myBoard: initalstateMyBoard,
      EnemyBoard: initalstateEnemyBoard
    };
  }

  handleClick(index) {
    console.log(index);
  }

  render() {
    return (
      <div className="gameBoard">
        {/* <div className="enemyBoard"> */}

        <div className="EnemyBoard">
          enemy board <br />
          <br />
          {this.state.EnemyBoard.map((row, indexY) => {
            return (
              <div className="rows">
                {row.map((colum, indexX) => {
                  // const ClicktCoordinate = [indexX, indexY];
                  return (
                    <div className="columsEnemyBoard">
                      {this.state.EnemyBoard[indexY][indexX]}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="seperator" />
        <div className="myBoard">
          my board
          <br />
          <br />
          {this.state.myBoard.map((row, indexY) => {
            return (
              <div className="rows">
                {row.map((colum, indexX) => {
                  const ClicktCoordinate = [indexX, indexY];
                  return (
                    <div
                      className="colums"
                      key={indexX}
                      onClick={() => this.handleClick(ClicktCoordinate)}
                    >
                      {this.state.myBoard[indexY][indexX]}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});
export default connect(
  mapStateToProps,
  {}
)(Game);
