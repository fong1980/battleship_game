import * as request from "superagent";

// import { logout } from "./users";
// import { isExpired } from "../jwt";
import { baseUrl } from "../logicConstants/logicConstants";

export const SETUP_BOARD = "SETUP_BOARD";

// export const setupBoard = initalstateMyBoard => {
//   console.log("is het aangekomen?");
//   return {
//     type: SETUP_BOARD,
//     payload: "test"
//   };
// };

// export const setupBoard = () => (dispatch, getState) => {
//   console.log("ben ik er now wel of niet?");
//   request
//     // .get(`${baseUrl}/setupGames`)
//     .get(`${baseUrl}//batchs`)
//     .then(response =>
//       dispatch({
//         type: SETUP_BOARD,
//         payload: response.body
//       })
//     )
//     .catch(err => alert(err));
// };

// --------------------->dit werkt.
// export const setupBoard = () => (dispatch, getState) => {
//   request
//     .get(`${baseUrl}/setupGames`)
//     .then(response =>
//       dispatch({
//         type: SETUP_BOARD,
//         payload: response.body
//       })
//     )
//     .catch(err => alert(err));
// };

export const setupBoard = setupGame => (dispatch, getState) => {
  // request
  //   .put(`${baseUrl}/placeShips/1`)
  //   .send(a)
  //   .then(response =>
  //     dispatch({
  //       type: SETUP_BOARD,
  //       payload: response.body
  //     })
  //   )
  //   .catch(err => alert(err));
};
