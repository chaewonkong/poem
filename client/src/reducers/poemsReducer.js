import { FETCH_POEMS, POEM_UPDATE } from "../actions/types";

const INITIAL_STATE = { poems: [] };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POEMS:
      return action.payload || false;
    case POEM_UPDATE:
      return action.payload;
    default:
      return state;
  }
}
