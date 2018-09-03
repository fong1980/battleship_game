import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { setupBoard } from "../actions/setupGame";

import {
  myShips,
  initalStatemyShips,
  calcShipPositionInForState,
  checkPutAllShip,
  CheckOutOfBorder,
  checkShipAllreadyPut
} from "../logicConstants/logicConstants";
import "./setupGame.css";

// import "./game.css";

class SetupGame extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { shipsMyBoard: initalStatemyShips };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // this.PutShip = this.PutShip.bind(this);
  }
  handleClick(myShipBoard, startpoint, direction, typeShip) {
    if (!checkPutAllShip(myShipBoard)) return;
    if (!CheckOutOfBorder(startpoint, direction, typeShip)) return;
    if (checkShipAllreadyPut(myShipBoard, typeShip))
      // checkCrossShip();

      this.setState({
        shipsMyBoard: calcShipPositionInForState(
          myShipBoard,
          startpoint,
          direction,
          typeShip
        )
      });

    let a = 0;
    this.state.zomaarOmTeVernieuwen == 0 ? (a = 1) : (a = 0);
    this.setState({
      zomaarOmTeVernieuwen: a
    });
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: [event.target.value]
    });
  }
  render() {
    return (
      <div className="mainWrapper">
        <div className="optionsWrapper">
          <form>
            <label>
              <p> Chose direction </p>
              <input
                name="directions"
                type="radio"
                value="X"
                onChange={this.handleInputChange}
              />
              horizontal
              <input
                name="directions"
                type="radio"
                value="Y"
                onChange={this.handleInputChange}
              />
              vertical
            </label>

            <label>
              <p> Chose Ships </p>
              <input
                name="typeShip"
                type="radio"
                value="V"
                onChange={this.handleInputChange}
              />
              Vliegdekschips (5)
              <br />
              <input
                name="typeShip"
                type="radio"
                value="S"
                field="test"
                onChange={this.handleInputChange}
              />
              Slagschip (4)
              <br />
              <input
                name="typeShip"
                type="radio"
                value="K"
                onChange={this.handleInputChange}
              />
              Kruiser (3)
              <br />
              <input
                name="typeShip"
                type="radio"
                value="O"
                onChange={this.handleInputChange}
              />
              Onderzeeër (3) <br />
              <input
                name="typeShip"
                type="radio"
                value="M"
                onChange={this.handleInputChange}
              />
              Mijnenveger (2) <br />
            </label>
            <br />
          </form>
        </div>
        <div className="fieldWrapper">
          setBoard
          <br />
          {/* -------make a function 1--- */}
          {this.state.shipsMyBoard.map((row, indexY) => {
            return (
              <div className="rows">
                {row.map((colum, indexX) => {
                  const ClicktCoordinate = [indexX, indexY];

                  return (
                    <div
                      className="colums"
                      key={indexX}
                      onClick={() => {
                        this.handleClick(
                          this.state.shipsMyBoard,
                          ClicktCoordinate,
                          this.state.directions,
                          this.state.typeShip
                        );
                      }}
                    >
                      {this.state.shipsMyBoard[indexY][indexX]}
                    </div>
                  );
                })}
              </div>
            );
          })}
          {/* //---------end make a function 1------------- */}
          <Link to={`/game`} onClick={() => this.handleClick(myShips)}>
            // <button>go to game</button>
            //{" "}
          </Link>
        </div>
        //{" "}
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

// handleClick(myShips) {
//   this.props.setupBoard(myShips);
// }

// <Link to={`/game`} onClick={() => this.handleClick(myShips)}>
// <button>go to game</button>
// </Link>
