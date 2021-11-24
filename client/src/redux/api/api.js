import { axiosInstance } from "./axiosConfig";

// Auth api //
export const registrApi = (user) => {
  return axiosInstance.post(`/registr`, user);
};

export const loginApi = (user) => {
  return axiosInstance.post(`/login`, user);
};

// Exercise api //
export const getAllExerciseApi = () => {
  return axiosInstance.get(`/exercise`);
};

export const createNewExerciseApi = (exercise) => {
  return axiosInstance.post(`/exercise`, exercise);
};

export const updExerciseApi = (exercise) => {
  return axiosInstance.put(`/exercise/update`, exercise);
};

export const delExerciseApi = (id) => {
  return axiosInstance.post(`/exercise/delete`, { id });
};

// Workout api //
export const getAllWorkoutApi = () => {
  return axiosInstance.get(`/workout`);
};

export const createWorkoutApi = (workout) => {
  return axiosInstance.post(`/workout`, workout);
};

export const updateWorkoutApi = (workout) => {
  return axiosInstance.put(`/workout/edit`, workout);
};

export const delWorkoutApi = (workout) => {
  return axiosInstance.post(`/workout/delete`, workout);
};
