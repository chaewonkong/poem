import axios from "axios";
import uuidv1 from "uuid/v1";
import { FETCH_POEMS, POST_POEM_SUCCESS, CREATE_USER } from "./types";

export const createUser = ({ identifier, nickname, password }) => {
  return function(dispatch) {
    axios
      .post("https://mighty-chamber-86168.herokuapp.com/poets/", {
        identifier,
        nickname,
        password,
        password_conf: password
      })
      .then(dispatch({ type: CREATE_USER }));
  };
};

export const fetchPoems = () => async dispatch => {
  const res = await axios.get("/api/poems");
  dispatch({ type: FETCH_POEMS, payload: res.data });
};

export const postPoem = ({ title, content }, prevState) => {
  const id = uuidv1();
  return function(dispatch) {
    axios.post("/api/poems/new", { title, content, id }).then(() =>
      dispatch({
        type: POST_POEM_SUCCESS,
        payload: {
          poems: [...prevState, { title, content, id }],
          post_success: true
        }
      })
    );
  };
};
