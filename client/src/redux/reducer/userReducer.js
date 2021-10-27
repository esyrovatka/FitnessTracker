import { IS_AUTHORIZED, IS_LOGOUT, SET_USER_ERROR } from "../constants.js";

const initialState = {
  isAuthorized: localStorage.token ? true : false,
  error: null,
};

export const userReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case IS_AUTHORIZED:
      return { ...state, isAuthorized: true, error: null };
    case IS_LOGOUT:
      return { ...state, isAuthorized: false, error: null };
    case SET_USER_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};
