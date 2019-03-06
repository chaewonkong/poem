import { WRITE_POEM, EDIT_POEM, SUBMIT_POEM, SET_POEM } from "./types";

const INITIAL_STATE = { text: "하루시작", leftAction: {}, rightAction: {} };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case WRITE_POEM:
      return action.payload || INITIAL_STATE;
    case EDIT_POEM:
      return action.payload;
    case SUBMIT_POEM:
      return action.payload;
    case SET_POEM:
      return action.payload;
    default:
      return state;
  }
}
