import axios from "axios";
import uuidv1 from "uuid/v1";
import { FETCH_POEMS, POST_POEM } from "./types";

export const fetchPoems = () => async dispatch => {
  const res = await axios.get("/api/poems");
  dispatch({ type: FETCH_POEMS, payload: res.data });
};

export const postPoem = ({ title, content }) => {
  const id = uuidv1();
  return function() {
    axios
      .post("/api/poems/new", { title, content, id })
      .then(req => console.log(req));
  };
};
