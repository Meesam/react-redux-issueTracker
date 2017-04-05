import axios from 'axios';
import URL from '../../../appconfig';

export const FETCH_ISSUES="FETCH_ISSUES";
export const FETCH_ISSUES_SUCCESS="FETCH_ISSUES_SUCCESS";
export const FETCH_ISSUES_FAILURE="FETCH_ISSUES_FAILURE";
export const ADD_ISSUE="ADD_ISSUE";
export const ADD_ISSUE_SUCCESS="ADD_ISSUE_SUCCESS";
export const ADD_ISSUE_FAILURE="ADD_ISSUE_FAILURE";
export const FETCH_ISSUE_BY_ID="FETCH_ISSUE_BY_ID";
export const FETCH_ISSUE_BY_ID_SUCCESS="FETCH_ISSUE_BY_ID_SUCCESS";
export const FETCH_ISSUE_BY_ID_FAILURE="FETCH_ISSUE_BY_ID_FAILURE";

const aTableInfo={
  CurPage:1,
  RPP:5,
}

export function fetchIssues(pageInfo=null) {
  const request=axios({
    url:`${URL.ROOT_URL}/issues`,
    method:'POST',
    data:pageInfo ? pageInfo : aTableInfo,
    Headers:[]

  });
  return{
    type:FETCH_ISSUES,
    payload:request
  }
}

export function fetchIssuesSuccess(issues, curpage) {
  return{
    type:FETCH_ISSUES_SUCCESS,
    payload:{
      issues:issues,
      curPage:curpage
    }
  }
}

export function fetchIssuesFailure(error) {
  return{
    type:FETCH_ISSUES_FAILURE,
    payload:error
  }
}

export function addIssue(formValues) {
  const request=axios({
    url:`${URL.ROOT_URL}/issues/add`,
    method:'POST',
    data:formValues,
    Headers:[]
  });
  return{
    type:ADD_ISSUE,
    payload:request
  }
}

export function addIssueSuccess(response) {
  return {
    type:ADD_ISSUE_SUCCESS,
    payload:response
  }
}

export function addIssueFailure(error) {
  return{
    type:ADD_ISSUE_FAILURE,
    payload:error
  }
}

export function fetchIssueById(issueId) {
  const request=axios({
    url:`${URL.ROOT_URL}/issues/${issueId}`,
    method:'GET',
    Headers:[]
  });
  return{
    type:FETCH_ISSUE_BY_ID,
    payload:request
  }
}

export function fetchIssueByIdSuccess(issue) {
  return{
    type:FETCH_ISSUE_BY_ID_SUCCESS,
    payload:issue
  }
}

export function fetchIssueByIdFailure(error) {
  return{
    type:FETCH_ISSUE_BY_ID_FAILURE,
    payload:error
  }
}


