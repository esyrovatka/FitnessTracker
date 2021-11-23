import axios from "axios";
import store from "../store";
import { logOut } from "../action";

const { dispatchExport } = store;

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

axiosInstance.interceptors.response.use(
  (res) => res,
  (err) => {
    const { status } = err.response;
    status === 401 && dispatchExport(logOut());
    return Promise.reject(err);
  }
);
axiosInstance.interceptors.request.use((config) => {
  config.headers.authorization = `Bearer ${localStorage.token}`;
  return config;
});
