import axios from "axios";
import uuidv1 from "uuid/v1";
import {
  FETCH_POEMS,
  POST_POEM_SUCCESS,
  CREATE_USER,
  LOGIN_SUCCESS
} from "./types";

export const loginUser = ({ identifier, password }) => {
  return function(dispatch) {
    axios
      .post("https://mighty-chamber-86168.herokuapp.com/auth/login/", {
        identifier,
        password
      })
      .then(res =>
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { ...res.data, redirect: "/" }
        })
      );
  };
};
export const createUser = ({ identifier, nickname, password }) => {
  return function(dispatch) {
    axios
      .post("https://mighty-chamber-86168.herokuapp.com/poets/", {
        identifier,
        nickname,
        password,
        password_conf: password
      })
      .catch(err => console.log(err))
      .then(res =>
        dispatch({ type: CREATE_USER, payload: { ...res.data, redirect: "/" } })
      );
  };
};

export const fetchPoems = () => async dispatch => {
  const res = await axios.get(
    "https://mighty-chamber-86168.herokuapp.com/poems/"
  );
  dispatch({ type: FETCH_POEMS, payload: res.data.results });
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
