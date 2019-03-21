import axios from "axios";
import { api } from "../config";

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common[api.header_names.auth] = `JWT ${token}`;
  } else {
    delete axios.defaults.headers.common[api.header_names.auth];
  }
};

export default setAuthToken;
