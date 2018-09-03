import axios from "axios";

export const addScore = score => {
  fetch("http://localhost:3001/api/v1/scoreboards", {
    method: "POST",
    body: score
  }).then(res => res.json);
};

export const fetchScores = () => {
  return axios.get("/api/v1/scoreboards").then(res => res.data);
};
