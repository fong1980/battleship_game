export const shipsEnemyBoard = "shipsEnemyBoard";
export const shipsMyBoard = "shipsMyBoard";
export const initalstateMyBoard = [
  [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
  [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
  [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
  [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
  [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
  [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
  [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
  [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
  [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
  [[0], [0], [0], [0], [0], [0], ["w"], [0], [0], [0], [0], [0]],
  [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
  [[0], [0], ["x"], [0], ["x"], [0], [0], [0], [0], [0], [0], [0]]
];

export const initalstateEnemyBoard = [
  [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
  [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
  [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
  [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
  [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
  [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
  [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
  [[0], [0], [1], [0], [0], [0], [1], [0], [0], [0], [0], [0]],
  [[0], [0], [1], [0], [0], [0], [1], [0], [0], [0], [0], [0]],
  [[0], [0], [1], [0], [0], [0], [1], [0], [0], [0], [0], [0]],
  [[0], [0], [1], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
  [[0], [0], [1], [0], [1], [1], [1], [1], [0], [0], [0], [0]]
];

export const myShips = [
  [0, "s", "s", "s", "s", "s", "s", 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, "v", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, "v", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, "v", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

export const initalStatemyShips = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

export const baseUrl = "http://localhost:4000";

export const calcShipPositionInForState = (
  myShipBoard,
  startpoint,
  direction,
  typeShip
) => {
  let fieldShipNeed = 0;

  typeShip == "V" ? (fieldShipNeed = 5) : "";
  typeShip == "S" ? (fieldShipNeed = 4) : "";
  typeShip == "K" ? (fieldShipNeed = 3) : "";
  typeShip == "O" ? (fieldShipNeed = 3) : "";
  typeShip == "M" ? (fieldShipNeed = 2) : "";
  let i = 0;
  for (i = 0; i < fieldShipNeed; i++) {
    if (direction == "X") {
      myShipBoard[startpoint[1]][startpoint[0] + i] = typeShip[0];
    } else {
      myShipBoard[startpoint[1] + i][startpoint[0]] = typeShip[0];
    }
  }
  return myShipBoard;
};
export const checkPutAllShip = myShipBoard => {
  let count = 0;
  myShipBoard.map((x, i) =>
    x.map((y, i) => {
      if (y !== 0) {
        count++;
      } else {
      }
    })
  );
  if (count > 16) {
    alert("All ships already set, press Start Game to continue");
    return false;
  }
  return true;
};

export const CheckOutOfBorder = (startpoint, direction, typeShip) => {
  let fieldShipNeed = 0;
  typeShip == "V" ? (fieldShipNeed = 5) : "";
  typeShip == "S" ? (fieldShipNeed = 4) : "";
  typeShip == "K" ? (fieldShipNeed = 3) : "";
  typeShip == "O" ? (fieldShipNeed = 3) : "";
  typeShip == "M" ? (fieldShipNeed = 2) : "";

  let length = 0;

  direction == "x"
    ? (length = startpoint[0] + fieldShipNeed)
    : (length = startpoint[1] + fieldShipNeed);

  if (length > 12) {
    alert("Placement out of the boarder");
    return false;
  }
  return true;
};

export const checkShipAllreadyPut = (myShipBoard, typeShip) => {
  let exist = 0;
  myShipBoard.map((x, i) =>
    x.map((y, i) => {
      if (y == typeShip) {
        exist = true;
      }
    })
  );

  if (exist) {
    alert("This ship is already at board");
    return true;
  }
};

export const checkCrossShip = (
  myShipBoard,
  startpoint,
  direction,
  typeShip
) => {
  let fieldShipNeed = 0;

  typeShip == "V" ? (fieldShipNeed = 5) : "";
  typeShip == "S" ? (fieldShipNeed = 4) : "";
  typeShip == "K" ? (fieldShipNeed = 3) : "";
  typeShip == "O" ? (fieldShipNeed = 3) : "";
  typeShip == "M" ? (fieldShipNeed = 2) : "";
  let somethingInTheWay = null;
  let i = 0;
  for (i = 0; i < fieldShipNeed; i++) {
    if (direction == "X") {
      if (myShipBoard[startpoint[1]][startpoint[0] + i] !== 0) {
        somethingInTheWay = true;
      }
    } else {
      if (myShipBoard[startpoint[1] + i][startpoint[0]] !== 0) {
        somethingInTheWay = true;
      }
    }
  }
  if (somethingInTheWay) {
    alert("ships cannot cross eachother");
    return true;
  }
};
