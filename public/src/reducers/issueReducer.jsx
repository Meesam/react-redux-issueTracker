// Get Type from action directory
import {FETCH_ISSUES,FETCH_ISSUES_SUCCESS,FETCH_ISSUES_FAILURE,ADD_ISSUE,ADD_ISSUE_SUCCESS,ADD_ISSUE_FAILURE,
FETCH_ISSUE_BY_ID,FETCH_ISSUE_BY_ID_SUCCESS,FETCH_ISSUE_BY_ID_FAILURE, FETCH_ISSUE_BY_NAME,FETCH_ISSUE_BY_NAME_SUCCESS,FETCH_ISSUE_BY_NAME_FAILURE,
ADD_ISSUE_COMMENT,ADD_ISSUE_COMMENT_SUCCESS,ADD_ISSUE_COMMENT_FAILURE} from '../actions/issues.jsx'


const INITIAL_STATE = {
  issuesList:{issues:[],curPage:1,error:null,loading:false},
  newIssue:{success:null,error:null,loading:false},
  issue:null,
  newComment:{success:null,error:null,loading:false}
 };

export default function (state = INITIAL_STATE, action) {
  let error;
  switch (action.type){

    case FETCH_ISSUES:
      return {...state,issuesList:{issues:[],curPage:1,error:null,loading:true} }

    case FETCH_ISSUES_SUCCESS:
      return {...state,issuesList:{issues:action.payload.issues,curPage:action.payload.curPage,error:null,loading:false}};

    case FETCH_ISSUES_FAILURE:
      error = action.payload || {message: action.payload.message};
      return{...state,issuesList:{issues:[],curPage:1,error:error,loading:false}};

    case ADD_ISSUE:
      return {...state,newIssue:{success:null,error:null,loading:true}};

    case ADD_ISSUE_SUCCESS:
      return {...state,newIssue:{success:action.payload,error:null,loading:false}}

    case ADD_ISSUE_FAILURE:
      error = action.payload || {message: action.payload.message};
      return{...state,newIssue:{success:null,error:error,loading:false}};

    case ADD_ISSUE_COMMENT:
      return {...state,newComment:{success:null,error:null,loading:true}};

    case ADD_ISSUE_COMMENT_SUCCESS:
      return {...state,newComment:{success:action.payload,error:null,loading:false}}

    case ADD_ISSUE_COMMENT_FAILURE:
      error = action.payload || {message: action.payload.message};
      return{...state,newComment:{success:null,error:error,loading:false}};

    case FETCH_ISSUE_BY_ID:
      return {...state,issue:null};

    case FETCH_ISSUE_BY_ID_SUCCESS:
      return {...state,issue:action.payload};

    case FETCH_ISSUE_BY_ID_FAILURE:
      error = action.payload || {message: action.payload.message};
      return {...state,issue:null};

    case FETCH_ISSUE_BY_NAME:
      return {...state,issuesList:{issues:[],curPage:1,error:null,loading:true} };

    case FETCH_ISSUE_BY_NAME_SUCCESS:
      return {...state,issuesList:{issues:action.payload.issues,curPage:action.payload.curPage,error:null,loading:false}};

    case FETCH_ISSUE_BY_NAME_FAILURE:
      error = action.payload || {message: action.payload.message};
      return{...state,issuesList:{issues:[],curPage:1,error:error,loading:false}};

    default:
      return state;
  }

}
