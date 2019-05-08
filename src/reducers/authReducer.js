import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  FETCH_USER,
  DELETE_USER
} from "../actions/types";

const INITIAL_STATE = {
  nickname: "",
  password: "",
  identifier: ""
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.payload;
    case LOGOUT_SUCCESS:
      return INITIAL_STATE;
    case FETCH_USER:
      return action.payload;
    case DELETE_USER:
      return INITIAL_STATE;
    default:
      return state;
  }
}
