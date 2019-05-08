import { combineReducers } from "redux";
import authReducer from "./authReducer";
import poemsReducer from "./poemsReducer";
import todayReducer from "./todayReducer";

export default combineReducers({
  auth: authReducer,
  poems: poemsReducer,
  today: todayReducer
});
