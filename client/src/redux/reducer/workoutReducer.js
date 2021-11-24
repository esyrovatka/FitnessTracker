import {
  UPDATE_WORKOUT,
  DELETE_WORKOUT,
  SET_WORKOUT_LOADING,
  GET_ALL_WORKOUT,
  GET_CURRENT_DATA,
  IS_LOGOUT,
} from "../constants.js";

const initialState = {
  currData: new Date(),
  workoutList: [],
  isLoading: false,
  error: null,
};

export const workoutReducer = (
  state = initialState,
  { type, payload } = {}
) => {
  switch (type) {
    case SET_WORKOUT_LOADING:
      return { ...state, isLoading: true };
    case GET_ALL_WORKOUT:
      return { ...state, workoutList: payload, isLoading: false };
    case UPDATE_WORKOUT:
      return { ...state, workoutList: payload, isLoading: false };
    case GET_CURRENT_DATA:
      return { ...state, currData: payload, isLoading: false };
    case DELETE_WORKOUT:
      return {
        ...state,
        workoutList: state.workoutList.filter((item) => item._id !== payload),
      };
    case IS_LOGOUT:
      return { ...state, workoutList: [] };

    default:
      return state;
  }
};
