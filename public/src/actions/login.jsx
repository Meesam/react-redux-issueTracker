import axios from 'axios';
import URL from '../../../appconfig';

//Login
export const ON_LOGIN="ON_LOGIN";
export const ON_LOGIN_SUCCESS="ON_LOGIN_SUCCESS";
export const ON_LOGIN_FAILURE="ON_LOGIN_FAILURE";
export const RESET_LOGIN="RESET_LOGIN";

//Get current user from token in localStorage
export const USER_FROM_TOKEN = 'USER_FROM_TOKEN';
export const USER_FROM_TOKEN_SUCCESS = 'USER_FROM_TOKEN_SUCCESS';
export const USER_FROM_TOKEN_FAILURE = 'USER_FROM_TOKEN_FAILURE';
export const RESET_TOKEN = 'RESET_TOKEN';

// Logout User
export const LOGOUT_USER = 'LOGOUT_USER';

export function onLogin(formValues) {
	//const request = axios.post(`${URL}/login`, formValues);
  const request = axios({
    method: 'post',
    data: formValues,
    url: `${URL.ROOT_URL}/login`,
    headers: []
  });
	return {
    type: ON_LOGIN,
    payload: request
  };
}

export function onLoginSuccess(user){
	return{
		type:ON_LOGIN_SUCCESS,
		payload:user
	}
}

export function onLoginFailure(error){
   return {
    type:ON_LOGIN_FAILURE,
    payload:error   

   }
}

export function resetLogin() {
  return {
    type: RESET_LOGIN,
  };
}

export function UserFromToken(tokenFromStorage) {
  const request = axios({
    method: 'get',
    url: `${URL.ROOT_URL}/userfromtoken?token=${tokenFromStorage}`,
    headers:[]
  });

  return {
    type: USER_FROM_TOKEN,
    payload: request
  };
}

export function UserFromTokenSuccess(currentUser) {
  return {
    type: USER_FROM_TOKEN_SUCCESS,
    payload: currentUser
  };
}

export function UserFromTokenFailure(error) {
  return {
    type: USER_FROM_TOKEN_FAILURE,
    payload: error
  };
}


export function resetToken() {//used for logout
  return {
    type: RESET_TOKEN
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER
  };
}
