import { FETCH_POEMS } from "../actions/types";

export default function(state = { poems: null }, action) {
  console.log(state);
  switch (action.type) {
    case FETCH_POEMS:
      return action.payload || false;
    default:
      return state;
  }
}
