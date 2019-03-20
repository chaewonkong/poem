import _ from "lodash";
import { FETCH_POEMS, FETCH_POEM } from "../actions/types";

const INITIAL_STATE = { results: [] };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POEMS:
      let newResults = _.unionBy(
        state.results,
        action.payload.results,
        poem => {
          return poem.id;
        }
      );
      return {
        ...action.payload,
        results: newResults
      };
    // return action.payload || INITIAL_STATE;
    case FETCH_POEM:
      return action.payload;
    default:
      return state;
  }
}
