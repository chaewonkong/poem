import axios from "axios";
import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  FETCH_USER,
  DELETE_USER,
  FETCH_POEMS,
  POEM_UPDATE
} from "./types";

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

export const logoutUser = token => {
  return function(dispatch) {
    axios
      .get("https://mighty-chamber-86168.herokuapp.com/auth/logout/", {
        headers: { Authorization: "Token " + token }
      })
      .then(() => {
        localStorage.setItem("TOKEN", "");
        return dispatch({
          type: LOGOUT_SUCCESS
        });
      });
  };
};

export const createUser = data => {
  return function(dispatch) {
    axios({
      url: "https://mighty-chamber-86168.herokuapp.com/users/",
      method: "post",
      data
    })
      .catch(err => console.log(err))
      .then(res => {
        localStorage.setItem("TOKEN", res.data.token);
        return dispatch({
          type: FETCH_USER,
          payload: { ...res.data, redirect: "/" }
        });
      });
  };
};

export const fetchUser = token => {
  return function(dispatch) {
    axios
      .get("https://mighty-chamber-86168.herokuapp.com/users/current-user/", {
        headers: { Authorization: "Token " + token }
      })
      .then(res =>
        dispatch({ type: FETCH_USER, payload: { ...res.data, token } })
      );
  };
};

export const updateUser = ({
  userId,
  image,
  nickname,
  password,
  identifier,
  token
}) => {
  return function(dispatch) {
    console.log({ userId, image, nickname, password, identifier, token });
    axios
      .put(
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
      )
      .then(res =>
        dispatch({
          type: FETCH_USER,
          payload: { ...res.data, userId }
        })
      );
  };
};
export const deleteUser = ({ userId, token }) => {
  return function(dispatch) {
    axios
      .delete(`https://mighty-chamber-86168.herokuapp.com/users/${userId}/`, {
        headers: { Authorization: "Token " + token }
      })
      .then(() => {
        localStorage.setItem("TOKEN", "");
        return dispatch({ type: DELETE_USER });
      });
  };
};

export const fetchPoems = () => async dispatch => {
  const res = await axios.get(
    "https://mighty-chamber-86168.herokuapp.com/poems/"
  );
  dispatch({ type: FETCH_POEMS, payload: res.data.results });
};

export const postPoem = ({ id, title, content, token }) => {
  return function(dispatch) {
    if (id) {
      axios
        .put(
          `https://mighty-chamber-86168.herokuapp.com/poems/${id}/`,
          { title, content },
          { headers: { Authorization: "Token " + token } }
        )
        .then(res =>
          dispatch({
            type: FETCH_POEMS,
            payload: { ...res.dada, post_success: true }
          })
        );
    } else {
      axios
        .post(
          "https://mighty-chamber-86168.herokuapp.com/poems/",
          { title, content },
          { headers: { Authorization: "Token " + token } }
        )
        .then(res =>
          dispatch({
            type: FETCH_POEMS,
            payload: {
              ...res.data,
              post_success: true
            }
          })
        );
    }
  };
};

export const updatePoem = ({ id, token }) => {
  return function(dispatch) {
    axios
      .get(`https://mighty-chamber-86168.herokuapp.com/poems/${id}/`)
      .then(res =>
        dispatch({
          type: POEM_UPDATE,
          payload: {
            title: res.data.title,
            content: res.data.content,
            id,
            token
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
          .then(res => {
            return dispatch({
              type: FETCH_POEMS,
              payload: { ...res.data.results, delete_success: true }
            });
          })
      );
  };
};
