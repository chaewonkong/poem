import { combineReducers } from "redux";
import authReducer from "./authReducer";
import poemsReducer from "./poemsReducer";
import userReducer from "./userReducer";
import todayReducer from "./todayReducer";

export default combineReducers({
  auth: authReducer,
  poems: poemsReducer,
  user: userReducer,
  today: todayReducer
});
