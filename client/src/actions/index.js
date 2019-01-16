import axios from "axios";
import { FETCH_POEMS, POST_POEM } from "./types";

export const fetchPoems = () => async dispatch => {
  const res = await axios.get("/api/poems");
  dispatch({ type: FETCH_POEMS, payload: res.data });
};

export const postPoem = ({ title, content }) => {
  return () => console.log({ title, content });
  // const id = "000";
  // return function(dispatch) {
  //   console.log("yes");
  //   axios
  //     .post("/api/poems/new", { title, content, id })
  //     .then(console.log({ title, content, id }));
  //   // .then(dispatch({ type: POST_POEM_SUCCESS, payload: "" }));
  // };
};
