import { combineReducers } from "redux";
import authReducer from "./authReducer";
import poemsReducer from "./poemsReducer";

export default combineReducers({
  auth: authReducer,
  poems: poemsReducer
});
