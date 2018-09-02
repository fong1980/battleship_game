import { SETUP_BOARD } from "../actions/setupGame";

export default (state = null, action) => {
  switch (action.type) {
    case SETUP_BOARD:
      return action.payload;

    default:
      return state;
  }
};
