import { FETCH_PROJECT,FETCH_PROJECT_SUCCESS,FETCH_PROJECT_FAILURE,RESETS_PROJECT } from '.././actions/project.jsx'

const INITIAL_STATE={
  projectList:{projects:[],error:null,loading:false}
}

export default function (state=INITIAL_STATE,action) {
  let error;
  switch(action.type){

    case FETCH_PROJECT:
      return{...state,projectList:{projects:[],error:null,loading:true}};

    case FETCH_PROJECT_SUCCESS:
      return{...state,projectList:{projects:action.payload,error:null,loading:false}};

    case FETCH_PROJECT_FAILURE:
      error = action.payload || {message: action.payload.message};
      return{...state,projectList:{projects:[],error:error,loading:false}};

    case RESETS_PROJECT:
      return {projects:[],error:null,loading:false};

    case CREATE_POST:
      return {...state, newPost: {...state.newPost, loading: true}}

    case CREATE_POST_SUCCESS:
      return {...state, newPost: {post:action.payload, error:null, loading: false}}

    case CREATE_POST_FAILURE:
      error = action.payload || {message: action.payload.message};
      return {...state, newPost: {post:null, error:error, loading: false}}

    case RESET_NEW_POST:
      return {...state,  newPost:{post:null, error:null, loading: false}}

    case VALIDATE_POST_FIELDS:
      return {...state, newPost:{...state.newPost, error: null, loading: true}}

    case VALIDATE_POST_FIELDS_SUCCESS:
      return {...state, newPost:{...state.newPost, error: null, loading: false}}

    case VALIDATE_POST_FIELDS_FAILURE:
      let result = action.payload;
      if(!result) {
        error = {message: action.payload.message};
      } else {
        error = {title: result.title, categories: result.categories, description: result.description};
      }
      return {...state, newPost:{...state.newPost, error: error, loading: false}}
      
    case RESET_POST_FIELDS:
      return {...state, newPost:{...state.newPost, error: null, loading: null}}

    default:
      return state;
  }
}
