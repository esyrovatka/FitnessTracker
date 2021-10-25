import {
  GET_CURR_USER,
  DELETE_CURR_USER,
  SET_USER_ERROR,
} from "../constants.js";

const initialState = {
  user: [],
  curUser: localStorage.token || "",
  error: null,
};

export const userReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case GET_CURR_USER:
      return { ...state, curUser: payload, error: null };
    case DELETE_CURR_USER:
      return { ...state, curUser: "", error: null };
    case SET_USER_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};
