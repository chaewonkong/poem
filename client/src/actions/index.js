import axios from "axios";
import {
  FETCH_POEMS,
  POST_POEM_SUCCESS,
  CREATE_USER,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  UPLOAD_PROFILE,
  POEM_DELETE_SUCCESS,
  FETCH_USER_SUCCES
} from "./types";

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
      .then(res => {
        localStorage.setItem("TOKEN", res.data.token);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { ...res.data, redirect: "/" }
        });
      });
  };
};

export const logoutUser = () => {
  return function(dispatch) {
    localStorage.setItem("TOKEN", "");
    dispatch({
      type: LOGOUT_SUCCESS
    });
  };
};

export const createUser = data => {
  return function(dispatch) {
    axios({
      url: "https://mighty-chamber-86168.herokuapp.com/poets/",
      method: "post",
      data
    })
      .catch(err => console.log(err))
      .then(res =>
        dispatch({
          type: CREATE_USER,
          payload: { ...res, redirect: "/" }
        })
      );
  };
};

export const fetchUser = (token) => {
  return function(dispatch) {
    axios
      .get("https://mighty-chamber-86168.herokuapp.com/users/current-user/", {
        headers: { Authorization: "Token " + token }
      })
      .then(res => dispatch({ type: FETCH_USER_SUCCES, payload: res.data }));
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

export const deletePoem = ({ id, token }) => {
  return function(dispatch) {
    axios
      .delete(`https://mighty-chamber-86168.herokuapp.com/poems/${id}/`, {
        headers: { Authorization: "Token " + token }
      })
      .then(
        axios
          .get("https://mighty-chamber-86168.herokuapp.com/poems/")
          .then(res =>
            dispatch({ type: POEM_DELETE_SUCCESS, payload: res.data.results })
          )
      );
  };
};
