import {
  CREATE_USER,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  UPLOAD_PROFILE
} from "../actions/types";

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
    case UPLOAD_PROFILE:
      return action.payload;
    case LOGIN_SUCCESS:
      return action.payload;
    case LOGOUT_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
}
