import { combineReducers } from "redux";
import { exerciseReducer } from "./exerciseReducer";

import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  exercise: exerciseReducer,
});
