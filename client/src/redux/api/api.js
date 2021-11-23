import { axiosInstance } from "./axiosConfig";

// Auth api //
export const registrAxios = (user) => {
  return axiosInstance.post(`/registr`, user);
};

export const loginAxios = (user) => {
  return axiosInstance.post(`/login`, user);
};

// Exercise api //
export const getAllExerciseAxios = () => {
  return axiosInstance.get(`/exercise`);
};

export const createNewExerciseAxios = (exercise) => {
  return axiosInstance.post(`/exercise`, exercise);
};

export const updExerciseAxios = (exercise) => {
  return axiosInstance.put(`/exercise/update`, exercise);
};

export const delExerciseAxios = (id) => {
  return axiosInstance.post(`/exercise/delete`, { id });
};

// Workout api //
export const getAllWorkoutAxios = () => {
  return axiosInstance.get(`/workout`);
};

export const createWorkoutAxios = (workout) => {
  return axiosInstance.post(`/workout`, workout);
};

export const updateWorkoutAxios = (workout) => {
  return axiosInstance.put(`/workout/edit`, workout);
};

export const delWorkoutAxios = (workout) => {
  return axiosInstance.post(`/workout/delete`, workout);
};
