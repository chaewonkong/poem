import {
  CREATE_USER,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  FETCH_USER_SUCCES,
  UPDATE_USER,
  DELETE_USER
} from "../actions/types";

const INITIAL_STATE = {
  nickname: "",
  password: "",
  identifier: ""
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CREATE_USER:
      return action.payload;
    case LOGIN_SUCCESS:
      return action.payload;
    case LOGOUT_SUCCESS:
      return INITIAL_STATE;
    case FETCH_USER_SUCCES:
      return action.payload;
    case UPDATE_USER:
      return action.payload;
    case DELETE_USER:
      return INITIAL_STATE;
    default:
      return state;
  }
}
