import axios from 'axios';
import URL from '../../../appconfig';

export const FETCH_PROJECT = "FETCH_PROJECT" ;
export const FETCH_PROJECT_SUCCESS = "FETCH_PROJECT_SUCCESS";
export const FETCH_PROJECT_FAILURE = "FETCH_PROJECT_FAILURE";
export const RESETS_PROJECT = "RESETS_PROJECT";
export const FETCH_PROJECT_BY_ID="FETCH_PROJECT_BY_ID";
export const FETCH_PROJECT_BY_ID_SUCCESS="FETCH_PROJECT_BY_ID_SUCCESS";
export const FETCH_PROJECT_BY_ID_FAILURE="FETCH_PROJECT_BY_ID_FAILURE";
export const ADD_PROJECT="ADD_PROJECT";
export const ADD_PROJECT_SUCCESS="ADD_PROJECT_SUCCESS";
export const ADD_PROJECT_FAILURE="ADD_PROJECT_FAILURE";
export const FETCH_PROJECTTYPE="FETCH_PROJECTTYPE";
export const FETCH_PROJECTTYPE_SUCCESS="FETCH_PROJECTTYPE_SUCCESS";
export const FETCH_PROJECTTYPE_FAILURE="FETCH_PROJECTTYPE_FAILURE";
export const SEARCH_PROJECT="SEARCH_PROJECT";
export const SEARCH_PROJECT_SUCCESS="SEARCH_PROJECT_SUCCESS";
export const SEARCH_PROJECT_FAILURE="SEARCH_PROJECT_FAILURE";
export const ASYNC_VALIDATE="ASYNC_VALIDATE";
export const ASYNC_VALIDATE_SUCCESS="ASYNC_VALIDATE_SUCCESS";
export const ASYNC_VALIDATE_FAILURE="ASYNC_VALIDATE_FAILURE";

const aTableInfo={
  CurPage:1,
  RPP:5,
  SortBy:"ProjectName"
}

export function fetchProject(pageInfo=null) {
  const request=axios({
    url:`${URL.ROOT_URL}/project`,
    method:'POST',
    data:pageInfo ? pageInfo : aTableInfo,
    Headers:[]
  });
  return{
    type:FETCH_PROJECT,
    payload:request
  }
}

export function fetchProjectSuccess(projects,curpage) {
  return{
    type:FETCH_PROJECT_SUCCESS,
    payload:{
      projects:projects,
      curPage:curpage,
    }
  }
}

export function fetchProjectFailure(error) {
  return{
    type:FETCH_PROJECT_FAILURE,
    payload:error
  }
}

export function fectchProjectById(projectId) {
  const request=axios({
    url:`${URL.ROOT_URL}/projects/${projectId}`,
    method:'GET',
    Headers:[]
  });
  return{
    type:FETCH_PROJECT_BY_ID,
    payload:request
  }
}

export function fetchProjectByIdSuccess(project) {
  return{
    type:FETCH_PROJECT_BY_ID_SUCCESS,
    payload:project
  }
}

export function fetchProjectByIdFailure(error) {
  return{
    type:FETCH_PROJECT_BY_ID_FAILURE,
    payload:error
  }
}

export function addProject(formValues) {
  const request = axios({
    method: 'post',
    data: formValues,
    url: `${URL.ROOT_URL}/projects/add`,
    headers: []
  });
  return {
    type: ADD_PROJECT,
    payload: request
  }
}

export function addProjectSuccess(response) {
  return {
    type: ADD_PROJECT_SUCCESS,
    payload: response
  }
}

export function addProjectFailue(error) {
  return {
    type: ADD_PROJECT_FAILURE,
    payload: error
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

export function searchProject(pageInfo) {
  pageInfo.CurPage=aTableInfo.CurPage;
  pageInfo.RPP=aTableInfo.RPP;
  const request=axios({
    url:`${URL.ROOT_URL}/project/search`,
    method:'POST',
    data:pageInfo,
    Headers:[]
  });
  return{
    type:SEARCH_PROJECT,
    payload:request
  }
}

export function searchProjectSuccess(projects) {
  return{
    type:SEARCH_PROJECT_SUCCESS,
    payload:projects
  }
}

export function searchProjectFailure(error) {
  return{
    type:SEARCH_PROJECT_FAILURE,
    payload:error
  }
}

export function asyncValidation(input) {
  const request=axios({
    url:`${URL.ROOT_URL}/project/${input}`,
    method:'GET',
    Headers:[]
  });
  return{
    type:ASYNC_VALIDATE,
    payload:request
  }
}

export function asyncValidateSuccess(result) {
  return{
    type:ASYNC_VALIDATE_SUCCESS,
    payload:result
  }
}

export function asyncValidateFailure(error) {
  return{
    type:ASYNC_VALIDATE_FAILURE,
    payload:error
  }
}
