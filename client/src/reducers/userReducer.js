import { FETCH_SELECTED_USER } from "../actions/types";

const INITIAL_STATE = {
  url: null,
  pk: null,
  identifier: null,
  password: null,
  nickname: null,
  image: null,
  description: null,
  poems_all_count: null,
  poems_displayed_count: null,
  subscribed_count: null,
  keeped_count: null,
  likes_count: null
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_SELECTED_USER:
      return action.payload;
    default:
      return state;
  }
}
