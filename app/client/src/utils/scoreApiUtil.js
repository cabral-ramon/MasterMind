import axios from "axios";

export const addScore = score => {
  return axios
    .post("/api/v1/scoreboards", {
      score
    })
    .then(res => res.data);
};

export const fetchScores = () => {
  return axios
    .get("/api/v1/scoreboards", { headers: { responseType: "json" } })
    .then(res => res.data);
};

export const searchScores = query => {
  return axios
    .get(`/api/v1/search?query=${query}`, {
      headers: { responseType: "json" }
    })
    .then(res => {
      return res.data;
    });
};
