import {doActionPost,doActionGet} from '../common/httpRequest';

export const FETCH_ISSUES="FETCH_ISSUES";
export const FETCH_ISSUES_SUCCESS="FETCH_ISSUES_SUCCESS";
export const FETCH_ISSUES_FAILURE="FETCH_ISSUES_FAILURE";
export const ADD_ISSUE="ADD_ISSUE";
export const ADD_ISSUE_SUCCESS="ADD_ISSUE_SUCCESS";
export const ADD_ISSUE_FAILURE="ADD_ISSUE_FAILURE";
export const FETCH_ISSUE_BY_ID="FETCH_ISSUE_BY_ID";
export const FETCH_ISSUE_BY_ID_SUCCESS="FETCH_ISSUE_BY_ID_SUCCESS";
export const FETCH_ISSUE_BY_ID_FAILURE="FETCH_ISSUE_BY_ID_FAILURE";
export const FETCH_ISSUE_BY_NAME="FETCH_ISSUE_BY_NAME";
export const FETCH_ISSUE_BY_NAME_SUCCESS="FETCH_ISSUE_BY_NAME_SUCCESS";
export const FETCH_ISSUE_BY_NAME_FAILURE="FETCH_ISSUE_BY_NAME_FAILURE";
export const ADD_ISSUE_COMMENT="ADD_ISSUE_COMMENT";
export const ADD_ISSUE_COMMENT_SUCCESS="ADD_ISSUE_COMMENT_SUCCESS";
export const ADD_ISSUE_COMMENT_FAILURE="ADD_ISSUE_COMMENT_FAILURE";

const aTableInfo={
  CurPage:1,
  RPP:10,
}

export function fetchIssues(pageInfo=null) {
  const request = doActionPost({url: 'issues', data: pageInfo});
  return {
    type: FETCH_ISSUES,
    payload: request
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
  const request = doActionPost({url: 'issues/add', data: formValues});
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

export function addIssueComment(formValues) {
  const request = doActionPost({url: 'issues/addcomment', data: formValues});
  return{
    type:ADD_ISSUE_COMMENT,
    payload:request
  }
}

export function addIssueCommentSuccess(response) {
  return {
    type:ADD_ISSUE_COMMENT_SUCCESS,
    payload:response
  }
}

export function addIssueCommentFailure(error) {
  return{
    type:ADD_ISSUE_COMMENT_FAILURE,
    payload:error
  }
}

export function fetchIssueById(issueId) {
  const request = doActionGet({url: 'issues/'+ issueId});
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

export function fetchIssueByName(pageInfo=null) {
  const request = doActionPost({url: 'searchissues', data: pageInfo});
  return{
    type:FETCH_ISSUE_BY_NAME,
    payload:request
  }

}

export function fetchIssueByNameSuccess(issuesData, curpage) {
  return{
    type:FETCH_ISSUE_BY_NAME_SUCCESS,
    payload:{
      issues:issuesData,
      curPage:curpage
    }
  }
}

export function fetchIssueByNameFailure(error) {
  return{
    type:FETCH_ISSUE_BY_NAME_FAILURE,
    payload:error
  }
}


