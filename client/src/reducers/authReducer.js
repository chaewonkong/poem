import { CREATE_USER, LOGIN_SUCCESS } from "../actions/types";

const INITIAL_STATE = {
  nickname: "",
  password: "",
  identifier: null
  // error: "",
  // loading: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CREATE_USER:
      return { ...state };
    case LOGIN_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
