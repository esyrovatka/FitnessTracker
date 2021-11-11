import { combineReducers } from "redux";
import { exerciseReducer } from "./exerciseReducer";

import { userReducer } from "./userReducer";
import { workoutReducer } from "./workoutReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  exercise: exerciseReducer,
  workout: workoutReducer,
});
