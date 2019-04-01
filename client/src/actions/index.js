import axios from "axios";
import {
  LOGOUT_SUCCESS,
  FETCH_USER,
  DELETE_USER,
  FETCH_POEMS,
  FETCH_POEM,
  FETCH_SELECTED_USER
} from "./types";

export const logoutUser = () => {
  return { type: LOGOUT_SUCCESS };
};

export const fetchUser = user => ({ type: FETCH_USER, payload: user });

export const getSelectedUser = data => {
  return { type: FETCH_SELECTED_USER, payload: data };
};

export const fetchPoems = data => ({ type: FETCH_POEMS, payload: data });

export const updatePoem = ({ id, title, content, token }) => async dispatch => {
  const res = await axios.put(
    `https://mighty-chamber-86168.herokuapp.com/poems/${id}/`,
    { title, content },
    { headers: { Authorization: token } }
  );
  dispatch({
    type: FETCH_POEMS,
    payload: {
      ...res.data,
      redirect: "/"
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

export const likePoem = ({ id, token }) => async dispatch => {
  await axios.post(
    `https://mighty-chamber-86168.herokuapp.com/poems/${id}/like/`,
    {},
    {
      headers: { Authorization: token }
    }
  );
  dispatch({ type: FETCH_POEMS });
};

export const dislikePoem = ({ id, token }) => async dispatch => {
  await axios.post(
    `https://mighty-chamber-86168.herokuapp.com/poems/${id}/dislike/`,
    {},
    {
      headers: { Authorization: token }
    }
  );
  dispatch({ type: FETCH_POEMS });
};
