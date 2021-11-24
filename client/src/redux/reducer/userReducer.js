import {
  IS_AUTHORIZED,
  IS_LOGOUT,
  IS_UTHORIZED_LOADING,
  SET_USER_ERROR,
} from "../constants.js";

const initialState = {
  isAuthorized: localStorage.token ? true : false,
  currEmail: null,
  error: null,
  isLoading: false,
};

export const userReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case IS_UTHORIZED_LOADING:
      return { ...state, isLoading: true };
    case IS_AUTHORIZED:
      return {
        ...state,
        isAuthorized: true,
        currEmail: payload.email,
        isLoading: false,
      };
    case IS_LOGOUT:
      return { ...state, isAuthorized: false, error: null, currEmail: null };
    case SET_USER_ERROR:
      return { ...state, error: payload, isLoading: true };
    default:
      return state;
  }
};
