import { FETCH_POEMS } from "../actions/types";
export default function(
  state = { poems: [{ title: "", id: "", content: "" }] },
  action
) {
  console.log(action);
  switch (action.type) {
    case FETCH_POEMS:
      return action.payload;
    default:
      return state;
  }
}
