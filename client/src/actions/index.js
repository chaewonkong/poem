import axios from "axios";
import { FETCH_POEMS } from "./types";

const fetchPoems = () => {
  return function(dispatch) {
    axios
      .get("/api/poems")
      .then(res => dispatch({ type: FETCH_POEMS, payload: res }));
  };
};
