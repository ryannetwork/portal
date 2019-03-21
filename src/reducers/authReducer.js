import {
    CLEAR_CURRENT_PROFILE,
    SET_CURRENT_USER
  } from "../constants/actionTypes";
  import { isEmpty } from "../validation";
  
  const initialState = {
    isAuthenticated: false,
    user: {},
    token: localStorage.getItem("jwtToken")
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case SET_CURRENT_USER:
        return {
          ...state,
          isAuthenticated: !isEmpty(action.payload),
          user: action.payload
        };
  
      case CLEAR_CURRENT_PROFILE:
        return {
          ...state,
          isLoginPending: false,
          isLoginSuccess: false,
          loginError: null
        };
  
      default:
        return state;
    }
  }
  