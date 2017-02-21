import axios from 'axios';
import URL from '../../../appconfig';

// Modules List
export const FETCH_MODULES="FETCH_MODULES";
export const FETCH_MODULES_SUCCESS="FETCH_MODULES_SUCCESS";
export const FETCH_MODULES_FAILURE="FETCH_MODULES_FAILURE";

export function fetchModules() {
  const request=axios({
    url:`${URL.ROOT_URL}/modules`,
    method:'GET',
    Headers:[]
  });
  return{
    type:FETCH_MODULES,
    payload:request
  }
}

export function fetchModulesSuccess(modules) {
  return{
    type:FETCH_MODULES_SUCCESS,
    payload:modules
  }
}

export function fetchModulesFailure(error) {
  return{
    type:FETCH_MODULES_FAILURE,
    payload:error
  }
}


