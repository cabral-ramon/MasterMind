import { RECEIVE_SCORES } from "../actions/types";

const scoreReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_SCORES:
      return action.scores;
    default:
      return state;
  }
};

export default scoreReducer;
