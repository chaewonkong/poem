import {
  FETCH_POEMS,
  POST_POEM_SUCCESS,
  POEM_DELETE_SUCCESS,
  POEM_UPDATE
} from "../actions/types";

const INITIAL_STATE = { poems: [] };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POEMS:
      return action.payload || false;
    case POST_POEM_SUCCESS:
      return action.payload;
    case POEM_DELETE_SUCCESS:
      return action.payload;
    case POEM_UPDATE:
      return action.payload;
    default:
      return state;
  }
}
