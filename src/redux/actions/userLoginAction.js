import axios from "axios";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
} from "../types/loginTypes";

export const loginAction = (user, history) => async (dispatch) => {
  try {
    dispatch(loginRequest());

    const res = await axios.post(`http://localhost:8000/authentication/login`, user);

    const { data } = await res;
    console.log('User data',data.data);
    localStorage.setItem("access-token", data.data.token);
    localStorage.setItem("user", JSON.stringify(data.data.user));
    localStorage.setItem("names", JSON.stringify(data.data.names));
      if(data.data.role==="Admin"){
        localStorage.setItem("userType",'Admin');
           history.push("/bankreconciliation");
        
        window.location.reload();
      }
      else if(data.data.role==="Level1"){
        localStorage.setItem("userType",'Level1');
        history.push("/authorizedtransfer");
        window.location.reload();
      }
      else {
        localStorage.setItem("userType",'Unkown');
        
      }
    
  } catch (err) {
    console.log(err);
    if (err.response) {
      const errorMessage = await err.response.data.message;
      dispatch(loginFailure(errorMessage));
    } else {
      dispatch(loginFailure("Network Error"));
    }
  }
};

export const loginRequest = () => {
  return {
    type: USER_LOGIN_REQUEST,
  };
};

export const loginSuccess = (login) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: login,
  };
};
export const loginFailure = (error) => {
  return {
    type: USER_LOGIN_FAILURE,
    payload: error,
  };
};
