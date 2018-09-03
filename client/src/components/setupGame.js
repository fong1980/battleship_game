import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { setupBoard } from "../actions/setupGame";

import { myShips } from "../logicConstants/logicConstants";

// import "./game.css";

class SetupGame extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: [event.target.value]
    });
  }
  render() {
    return (
      <form>
        <label>
          <p> Chose direction </p>
          <input
            name="directions"
            type="radio"
            value="H"
            onChange={this.handleInputChange}
          />
          horizontal
          <input
            name="directions/"
            type="radio"
            value="V"
            onChange={this.handleInputChange}
          />
          vertical
        </label>

        <label>
          <p> Chose Ships </p>
          <input
            name="typeShips/field"
            type="radio"
            value="V"
            onChange={this.handleInputChange}
          />
          Vliegdekschips
          <br />
          <input
            name="typeShips/field"
            type="radio"
            value="S"
            field="test"
            onChange={this.handleInputChange}
          />
          Slagschip <br />
          <input
            name="typeShips/field"
            type="radio"
            value="K"
            onChange={this.handleInputChange}
          />
          Kruiser <br />
          <input
            name="typeShips/field"
            type="radio"
            value="O"
            onChange={this.handleInputChange}
          />
          Onderzeeër <br />
          <input
            name="typeShips/field"
            type="radio"
            value="M"
            onChange={this.handleInputChange}
          />
          Mijnenveger <br />
        </label>
        <br />
      </form>
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
