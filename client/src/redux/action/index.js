import axios from "axios";
import {
  GET_CURR_USER,
  DELETE_CURR_USER,
  SET_USER_ERROR,
} from "../constants.js";

export const registrAction = (user) => async (dispatch) => {
  const { email } = user;

  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/registr`,
      user
    );
    localStorage.setItem("token", response.data);
    dispatch({
      type: GET_CURR_USER,
      payload: email,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: SET_USER_ERROR,
      payload: err.response.status,
    });
  }
};

export const loginAction = (user) => async (dispatch) => {
  const { email } = user;
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/login`,
      user
    );
    localStorage.setItem("token", response.data);

    dispatch({
      type: GET_CURR_USER,
      payload: email,
    });
  } catch (err) {
    console.log(err.response.status);
    dispatch({
      type: SET_USER_ERROR,
      payload: err.response.status,
    });
  }
};

export const logOut = () => {
  localStorage.removeItem("token");
  return { type: DELETE_CURR_USER };
};
