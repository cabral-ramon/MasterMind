import { RECEIVE_SCORES } from "../actions/types";
import * as scoreApi from "../utils/scoreApiUtil";

const receiveScores = scores => {
  return {
    type: RECEIVE_SCORES,
    scores
  };
};

export const addScore = scoreParams => dispatch => {
  return scoreApi
    .addScore(scoreParams)
    .then(scores => dispatch(receiveScores(scores)));
};

export const fetchScores = () => dispatch => {
  return scoreApi.fetchScores().then(scores => dispatch(receiveScores(scores)));
};

export const searchScores = query => dispatch => {
  return scoreApi
    .searchScores(query)
    .then(scores => dispatch(receiveScores(scores)));
};
