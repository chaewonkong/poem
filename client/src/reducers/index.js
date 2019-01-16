import { combineReducers } from "redux";
import authReducer from "./authReducer";
import poemReducer from "./poemReducer";

export default combineReducers({
  auth: authReducer,
  poems: poemReducer
});
