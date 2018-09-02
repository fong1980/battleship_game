import * as request from "superagent";
// import { baseUrl } from "../constants";
// import { logout } from "./users";
// import { isExpired } from "../jwt";

export const SETUP_MY_BOARD = "SETUP_MY_BOARD";

export const setupMyBoard = initalstateMyBoard => {
  console.log("is het aangekomen?");
  return {
    type: SETUP_MY_BOARD,
    payload: "test"
  };
};

// export const getBatchs = () => (dispatch, getState) => {
//   const state = getState();
//   if (!state.currentUser) return null;
//   const jwt = state.currentUser.jwt;
//   if (isExpired(jwt)) return dispatch(logout());

//   request
//     .get(`${baseUrl}/batchs`)
//     .then(response =>
//       dispatch({
//         type: GET_BATCHS,
//         payload: response.body
//       })
//     )
//     .catch(err => alert(err));
// };

// export const createBatch = newBatch => {
//   return {
//     type: CREATE_BATCH,
//     payload: newBatch
//   };
// };
