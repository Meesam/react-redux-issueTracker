import axios from 'axios';
import URL from '../../../appconfig';

//Login

export const ON_LOGIN="ON_LOGIN";
export const ON_LOGIN_SUCCESS="ON_LOGIN_SUCCESS";
export const ON_LOGIN_FAILURE="ON_LOGIN_FAILURE";
export const RESET_LOGIN="RESET_LOGIN";

export function onLogin(formValues) {
	const request = axios.post(`${URL}/users/signin`, formValues);
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
