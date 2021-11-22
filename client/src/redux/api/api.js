import { axiosMongoDBInstance } from "./axiosConfig";

// Auth api //
export const registrAxios = (user) => {
  return axiosMongoDBInstance.post(`/registr`, user, {
    headers: { Authorization: "Bearer " + localStorage.token },
  });
};

export const loginAxios = (user) => {
  return axiosMongoDBInstance.post(`/login`, user, {
    headers: { Authorization: "Bearer " + localStorage.token },
  });
};

// Exercise api //
export const getAllExerciseAxios = () => {
  return axiosMongoDBInstance.get(`/exercise`, {
    headers: { Authorization: "Bearer " + localStorage.token },
  });
};

export const createNewExerciseAxios = (exercise) => {
  return axiosMongoDBInstance.post(`/exercise`, exercise, {
    headers: { Authorization: "Bearer " + localStorage.token },
  });
};

export const updExerciseAxios = (exercise) => {
  return axiosMongoDBInstance.put(`/exercise/update`, exercise, {
    headers: { Authorization: "Bearer " + localStorage.token },
  });
};

export const delExerciseAxios = (id) => {
  return axiosMongoDBInstance.post(
    `/exercise/delete`,
    { id },
    { headers: { Authorization: "Bearer " + localStorage.token } }
  );
};

// Workout api //
export const getAllWorkoutAxios = () => {
  return axiosMongoDBInstance.get(`/workout`, {
    headers: { Authorization: "Bearer " + localStorage.token },
  });
};

export const createWorkoutAxios = (workout) => {
  return axiosMongoDBInstance.post(`/workout`, workout, {
    headers: { Authorization: "Bearer " + localStorage.token },
  });
};

export const updateWorkoutAxios = (workout) => {
  return axiosMongoDBInstance.put(`/workout/edit`, workout, {
    headers: { Authorization: "Bearer " + localStorage.token },
  });
};

export const delWorkoutAxios = (workout) => {
  return axiosMongoDBInstance.post(`/workout/delete`, workout, {
    headers: { Authorization: "Bearer " + localStorage.token },
  });
};
