import scores from "./scoresReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  scores
});

export default rootReducer;
