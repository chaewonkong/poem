import { FETCH_TODAY } from "../actions/types";

export default function(state = {}, action) {
  if (action.type === FETCH_TODAY) {
    return action.payload;
  } else return state;
}
