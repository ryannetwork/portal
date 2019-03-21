import axios from "axios";
import jwt_decode from "jwt-decode";

import {
  CLEAR_CURRENT_PROFILE,
  SET_CURRENT_USER,
  LOGIN_ERROR,
  LOGIN_SUCCESS
} from "../constants/actionTypes";
import { api } from "../config";
import { setAuthToken } from "./";

export const registerUser = (userData, history) => dispatch => {
  axios
    .post(`${api.url.auth.register}`, userData)
    .then(res => history.push("/login"));
};

export const loginUser = (userData,history) => dispatch => {
    const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NTMxNzg4ODEsIm9yaWdfaWF0IjoxNTUzMTY0NDgxLCJ1c2VyX2lkIjo4OTksInVzZXJuYW1lIjoiYWNjb3VudEBhY2NvdW50LmNvbSIsImVtYWlsIjoiYWNjb3VudEBhY2NvdW50LmNvbSJ9.IbOw3_vB_7fzyqUEe5_szQKsTHXQlRPLTZb2kiSGhkE";
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
    //   toast.success(content.messages.login_success);
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch(setCurrentUser({}));
  window.location = "/login";
};

export const loginError = err => {
  return {
    type: LOGIN_ERROR,
    payload: err
  };
};

export const loginSuccess = res => {
  return {
    type: LOGIN_SUCCESS,
    payload: res
  };
};

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};
