import {
  GET_ALL_EXERCISE,
  SET_EXERCISE_LOADING,
  DELETE_EXERCISE,
  UPDATE_EXERCISE,
  IS_LOGOUT,
} from "../constants.js";

const initialState = {
  exerciseList: [],
  isLoading: false,
  error: null,
};

export const exerciseReducer = (
  state = initialState,
  { type, payload } = {}
) => {
  switch (type) {
    case SET_EXERCISE_LOADING:
      return { ...state, isLoading: true };
    case GET_ALL_EXERCISE:
      return { ...state, exerciseList: payload, isLoading: false };
    case UPDATE_EXERCISE:
      return { ...state, exerciseList: payload, isLoading: false };
    case DELETE_EXERCISE:
      return {
        ...state,
        exerciseList: state.exerciseList.filter(
          (item) => item._id !== payload._id
        ),
      };
    case IS_LOGOUT:
      return { ...state, exerciseList: [] };

    default:
      return state;
  }
};
