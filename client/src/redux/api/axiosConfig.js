import axios from "axios";

export const axiosMongoDBInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  //   headers: { Authorization: "Bearer " + localStorage.token },
});
