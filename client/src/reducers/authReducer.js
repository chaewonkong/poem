import { CREATE_USER, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../actions/types";

const INITIAL_STATE = {
  nickname: "",
  password: "",
  identifier: ""
  // error: "",
  // loading: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CREATE_USER:
      return action.payload;
    case LOGIN_SUCCESS:
      return action.payload;
    case LOGOUT_SUCCESS:
      return state;
    default:
      return state;
  }
}
