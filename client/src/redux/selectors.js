export const isAuthorized = (state) => state.user.isAuthorized;

export const currentUserError = (state) => state.user.error;

export const exerciseList = (state) => state.exercise.exerciseList;

export const exerciseIsLoad = (state) => state.exercise.isLoading;

export const workout = (state) => state.workout.workoutList;

export const currData = (state) => state.workout.currData;
