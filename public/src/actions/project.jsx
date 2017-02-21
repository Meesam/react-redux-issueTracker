import axios from 'axios';
import URL from '../../../appconfig';

// Project List
export const FETCH_PROJECT = "FETCH_PROJECT" ;
export const FETCH_PROJECT_SUCCESS = "FETCH_PROJECT_SUCCESS";
export const FETCH_PROJECT_FAILURE = "FETCH_PROJECT_FAILURE";
export const RESETS_PROJECT = "RESETS_PROJECT";

//Create new post
export const CREATE_PROJECT = 'CREATE_PROJECT';
export const CREATE_PROJECT_SUCCESS = 'CREATE_PROJECT_SUCCESS';
export const CREATE_PROJECT_FAILURE = 'CREATE_PROJECT_FAILURE';
export const RESET_NEW_PROJECT = 'RESET_NEW_PROJECT';

//Validate post fields like Title, Categries on the server
export const VALIDATE_PROJECT_FIELDS = 'VALIDATE_PROJECT_FIELDS';
export const VALIDATE_PROJECT_FIELDS_SUCCESS = 'VALIDATE_PROJECT_FIELDS_SUCCESS';
export const VALIDATE_PROJECT_FIELDS_FAILURE = 'VALIDATE_PROJECT_FIELDS_FAILURE';
export const RESET_PROJECT_FIELDS = 'RESET_PROJECT_FIELDS';

// Project Type DropDown LIST
export const FETCH_PROJECTTYPE="FETCH_PROJECTTYPE";
export const FETCH_PROJECTTYPE_SUCCESS="FETCH_PROJECTTYPE_SUCCESS";
export const FETCH_PROJECTTYPE_FAILURE="FETCH_PROJECTTYPE_FAILURE";


export function fetchProject() {
  const request=axios({
    url:`${URL.ROOT_URL}/project`,
    method:'POST',
    Headers:[]
  });
  return{
    type:FETCH_PROJECT,
    payload:request
  }
}

export function fetchProjectSuccess(projects) {
   return{
     type:FETCH_PROJECT_SUCCESS,
     payload:projects
   }
}

export function fetchProjectFailure(error) {
  return{
    type:FETCH_PROJECT_FAILURE,
    payload:error
  }
}

export function fetchProjectType(){
  const request=axios({
    url:`${URL.ROOT_URL}/projecttype`,
    method:'GET',
    Headers:[]
  });
  return{
    type:FETCH_PROJECTTYPE,
    payload:request
  }
}

export function fetchProjectTypeSuccess(projectTypes){
  return{
    type:FETCH_PROJECTTYPE_SUCCESS,
    payload:projectTypes
  }
}

export function fetchProjectTypeFailure(error){
  return{
    type:FETCH_PROJECTTYPE_FAILURE,
    payload:error
  }
}

export function validateProjectFields(props) {
  //note: we cant have /posts/validateFields because it'll match /posts/:id path!
  const request = axios.post(`${URL.ROOT_URL}/posts/validate/fields`, props);

  return {
    type: VALIDATE_PROJECT_FIELDS,
    payload: request
  };
}

export function validateProjectFieldsSuccess() {
  return {
    type: VALIDATE_PROJECT_FIELDS_SUCCESS
  };
}

export function validateProjectFieldsFailure(error) {
  return {
    type: VALIDATE_PROJECT_FIELDS_FAILURE,
    payload: error
  };
}

export function resetProjectFields() {
  return {
    type: RESET_PROJECT_FIELDS
  }
};


export function createProject(props) {
  const request = axios({
    method: 'post',
    data: props,
    url: `${URL.ROOT_URL}/projects/add`,
    headers: []
  });

  return {
    type: CREATE_PROJECT,
    payload: request
  };
}

export function createProjectSuccess(newPost) {
  return {
    type: CREATE_PROJECT_SUCCESS,
    payload: newPost
  };
}

export function createProjectFailure(error) {
  return {
    type: CREATE_PROJECT_FAILURE,
    payload: error
  };
}

export function resetNewProject() {
  return {
    type: RESET_NEW_PROJECT
  }
};
