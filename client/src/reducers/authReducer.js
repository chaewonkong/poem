import { CREATE_USER } from "../actions/types";

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
    default:
      return state;
  }
}
