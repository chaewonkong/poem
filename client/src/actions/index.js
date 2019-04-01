import {
  LOGOUT_SUCCESS,
  FETCH_USER,
  FETCH_POEMS,
  FETCH_POEM,
  REACT_POEM,
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

export const getPoem = data => ({ type: FETCH_POEM, payload: data });

export const reactPoem = data => {
  return { type: REACT_POEM, payload: data };
};
