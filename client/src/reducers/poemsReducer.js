import { FETCH_POEMS, FETCH_POEM } from "../actions/types";

const INITIAL_STATE = { poems: [] };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POEMS:
      return action.payload || INITIAL_STATE;
    case FETCH_POEM:
      return action.payload;
    default:
      return state;
  }
}
