import axios from "axios";
import {
  FETCH_POEMS,
  POST_POEM_SUCCESS,
  CREATE_USER,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  UPLOAD_PROFILE
} from "./types";

export const logoutUser = () => {
  return function(dispatch) {
    dispatch({ type: LOGOUT_SUCCESS });
  };
};

export const uploadProfile = ({ imageUrl, image }) => {
  return function(dispatch) {
    dispatch({ type: UPLOAD_PROFILE, payload: { imageUrl, image } });
  };
};

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

export const createUser = data => {
  return function(dispatch) {
    axios
      .post("https://mighty-chamber-86168.herokuapp.com/poets/", data, {
        headers: { "Content-Type": "multipart/form-data" }
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

export const postPoem = ({ title, content, token }) => {
  return function(dispatch) {
    axios
      .post(
        "https://mighty-chamber-86168.herokuapp.com/poems/",
        { title, content },
        { headers: { Authorization: "Token " + token } }
      )
      .then(res =>
        dispatch({
          type: POST_POEM_SUCCESS,
          payload: {
            ...res.data,
            post_success: true
          }
        })
      );
  };
};
