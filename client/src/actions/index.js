import axios from "axios";
import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  FETCH_USER,
  DELETE_USER,
  FETCH_POEMS,
  FETCH_POEM
} from "./types";

export const loginUser = ({ identifier, password }) => async dispatch => {
  const res = await axios.post(
    "https://mighty-chamber-86168.herokuapp.com/auth/login/",
    {
      identifier,
      password
    }
  );
  localStorage.setItem("TOKEN", res.data.token);
  dispatch({
    type: LOGIN_SUCCESS,
    payload: { ...res.data, redirect: "/" }
  });
};

export const logoutUser = token => async dispatch => {
  const res = await axios.get(
    "https://mighty-chamber-86168.herokuapp.com/auth/logout/",
    {
      headers: { Authorization: "Token " + token }
    }
  );
  localStorage.setItem("TOKEN", "");
  return dispatch({
    type: LOGOUT_SUCCESS
  });
};

export const createUser = data => async dispatch => {
  const res = await axios({
    url: "https://mighty-chamber-86168.herokuapp.com/users/",
    method: "post",
    data
  });
  localStorage.setItem("TOKEN", res.data.token);
  dispatch({
    type: FETCH_USER,
    payload: { ...res.data, redirect: "/" }
  });
};

export const fetchUser = token => async dispatch => {
  const res = await axios.get(
    "https://mighty-chamber-86168.herokuapp.com/users/current-user/",
    {
      headers: { Authorization: "Token " + token }
    }
  );
  dispatch({ type: FETCH_USER, payload: { ...res.data, token } });
};

export const updateUser = ({
  userId,
  image,
  nickname,
  password,
  identifier,
  token
}) => async dispatch => {
  const res = await axios.put(
    `https://mighty-chamber-86168.herokuapp.com/users/${userId}/`,
    {
      image,
      nickname,
      password,
      identifier
    },
    {
      headers: { Authorization: "Token " + token }
    }
  );
  dispatch({
    type: FETCH_USER,
    payload: { ...res.data, userId }
  });
};

export const deleteUser = ({ userId, token }) => async dispatch => {
  const res = await axios.delete(
    `https://mighty-chamber-86168.herokuapp.com/users/${userId}/`,
    {
      headers: { Authorization: "Token " + token }
    }
  );
  localStorage.setItem("TOKEN", "");
  dispatch({
    type: DELETE_USER
  });
};

export const fetchPoems = () => async dispatch => {
  const res = await axios.get(
    "https://mighty-chamber-86168.herokuapp.com/poems/"
  );
  dispatch({ type: FETCH_POEMS, payload: res.data.results });
};

export const postPoem = ({ title, content, token }) => async dispatch => {
  const res = await axios.post(
    "https://mighty-chamber-86168.herokuapp.com/poems/",
    { title, content },
    { headers: { Authorization: "Token " + token } }
  );
  dispatch({
    type: FETCH_POEMS,
    payload: {
      ...res.data,
      post_success: true
    }
  });
};

export const updatePoem = ({ id, title, content, token }) => async dispatch => {
  const res = await axios.post(
    "https://mighty-chamber-86168.herokuapp.com/poems/",
    { title, content },
    { headers: { Authorization: "Token " + token } }
  );
  dispatch({
    type: FETCH_POEMS,
    payload: {
      ...res.data,
      post_success: true
    }
  });
};

export const fetchPoem = ({ id, token }) => async dispatch => {
  const res = await axios.get(
    `https://mighty-chamber-86168.herokuapp.com/poems/${id}/`
  );
  dispatch({
    type: FETCH_POEM,
    payload: {
      title: res.data.title,
      content: res.data.content,
      id,
      token
    }
  });
};

export const deletePoem = ({ id, token }) => async dispatch => {
  const res = await axios.delete(
    `https://mighty-chamber-86168.herokuapp.com/poems/${id}/`,
    {
      headers: { Authorization: "Token " + token }
    }
  );
  dispatch({ type: FETCH_POEMS });
};
