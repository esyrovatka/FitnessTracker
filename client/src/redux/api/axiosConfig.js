import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

axiosInstance.interceptors.request.use((config) => {
  config.headers.authorization = `Bearer ${localStorage.token}`;
  return config;
});

export const attachUnauthHandler = (handler = null) => {
  axiosInstance.interceptors.response.use(
    (res) => res,
    (err) => {
      const { status } = err.response;
      status === 401 && typeof handler === "function" && handler(); //dispatchExport(logOut());
      return Promise.reject(err);
    }
  );
};
