import axios from "axios";
import uuidv1 from "uuid/v1";
import { FETCH_POEMS, POST_POEM_SUCCESS } from "./types";

export const fetchPoems = () => async dispatch => {
  const res = await axios.get("/api/poems");
  dispatch({ type: FETCH_POEMS, payload: res.data });
};

export const postPoem = ({ title, content }) => {
  const id = uuidv1();
  return function(dispatch) {
    axios
      .post("/api/poems/new", { title, content, id })
      .then(
        dispatch({ type: POST_POEM_SUCCESS, payload: { post_success: true } })
      );
  };
};
