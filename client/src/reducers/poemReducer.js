import { FETCH_POEMS, POST_POEM_SUCCESS } from "../actions/types";

export default function(state = { poems: null }, action) {
  console.log(state);
  switch (action.type) {
    case FETCH_POEMS:
      return action.payload || false;
    case POST_POEM_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
