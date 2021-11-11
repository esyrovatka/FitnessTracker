import axios from "axios";
import {
  IS_AUTHORIZED,
  IS_LOGOUT,
  SET_USER_ERROR,
  GET_ALL_EXERCISE,
  SET_EXERCISE_LOADING,
  DELETE_EXERCISE,
  UPDATE_EXERCISE,
  SET_WORKOUT_LOADING,
  GET_ALL_WORKOUT,
  GET_CURRENT_DATA,
} from "../constants.js";

export const getCurrData = (currData) => (dispatch) => {
  dispatch({
    type: GET_CURRENT_DATA,
    payload: currData,
  });
};

export const registrAction = (user) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/registr`,
      user
    );
    localStorage.setItem("token", response.data);
    dispatch({ type: IS_AUTHORIZED });
  } catch (err) {
    console.log(err);
    dispatch({
      type: SET_USER_ERROR,
      payload: err.response.status,
    });
  }
};

export const loginAction = (user) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/login`,
      user
    );
    localStorage.setItem("token", response.data);

    dispatch({ type: IS_AUTHORIZED });
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
  return { type: IS_LOGOUT };
};

export const getAllExercise = () => async (dispatch) => {
  dispatch({
    type: SET_EXERCISE_LOADING,
  });
  const token = localStorage.token;
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/exercise`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    // console.log(response.data);
    dispatch({
      type: GET_ALL_EXERCISE,
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const createNewExercise = (exercise) => async () => {
  const token = localStorage.token;
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/exercise`,
      exercise,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    const order = JSON.parse(localStorage.Exercise_Order);
    order.push(response.data._id);
    localStorage.setItem("Exercise_Order", JSON.stringify(order));
  } catch (err) {
    console.log(err);
  }
};

export const updExercise = (exercise) => async (dispath) => {
  const token = localStorage.token;
  try {
    await axios.put(
      `${process.env.REACT_APP_BASE_URL}/exercise/update`,
      exercise,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    dispath({
      type: UPDATE_EXERCISE,
      payload: exercise,
    });
  } catch (err) {
    console.log(err);
  }
};

export const delExercise = (id) => async (dispatch) => {
  const token = localStorage.token;
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/exercise/delete`,
      { id },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    const order = JSON.parse(localStorage.Exercise_Order);
    const result = order.filter((item) => item !== id);
    localStorage.setItem("Exercise_Order", JSON.stringify(result));

    dispatch({
      type: DELETE_EXERCISE,
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getAllWorkout = () => async (dispatch) => {
  dispatch({
    type: SET_WORKOUT_LOADING,
  });
  const token = localStorage.token;
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/workout`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    dispatch({
      type: GET_ALL_WORKOUT,
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const createWorkout = (workout) => async () => {
  const token = localStorage.token;
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/workout`,
      workout,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
};

export const updateWorkout = (workout) => async () => {
  const token = localStorage.token;
  try {
    await axios.put(`${process.env.REACT_APP_BASE_URL}/workout/edit`, workout, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const delWorkout = (workout) => async () => {
  const token = localStorage.token;
  try {
    await axios.post(
      `${process.env.REACT_APP_BASE_URL}/workout/delete`,
      workout,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
  } catch (err) {
    console.log(err);
  }
};
