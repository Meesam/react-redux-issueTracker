import { FETCH_PROJECT,FETCH_PROJECT_SUCCESS,FETCH_PROJECT_FAILURE,RESETS_PROJECT,CREATE_PROJECT,CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_FAILURE, RESET_NEW_PROJECT , VALIDATE_PROJECT_FIELDS, VALIDATE_PROJECT_FIELDS_SUCCESS,  VALIDATE_PROJECT_FIELDS_FAILURE , RESET_PROJECT_FIELDS
} from '.././actions/project.jsx'

const INITIAL_STATE={
  projectList:{projects:[],error:null,loading:false},
  newProject:{project:null,erroe:null,loading:false}
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

    case CREATE_PROJECT:
      return {...state, newProject: {...state.newProject, loading: true}}

    case CREATE_PROJECT_SUCCESS:
      return {...state, newProject: {project:action.payload, error:null, loading: false}}

    case CREATE_PROJECT_FAILURE:
      error = action.payload || {message: action.payload.message};
      return {...state, newProject: {project:null, error:error, loading: false}}

    case RESET_NEW_PROJECT:
      return {...state,  newProject:{project:null, error:null, loading: false}}

    case VALIDATE_PROJECT_FIELDS:
      return {...state, newProject:{...state.newProject, error: null, loading: true}}

    case VALIDATE_PROJECT_FIELDS_SUCCESS:
      return {...state, newProject:{...state.newProject, error: null, loading: false}}

    case VALIDATE_PROJECT_FIELDS_FAILURE:
      let result = action.payload;
      if(!result) {
        error = {message: action.payload.message};
      } else {
        error = {title: result.title, categories: result.categories, description: result.description};
      }
      return {...state, newProject:{...state.newProject, error: error, loading: false}}
      
    case RESET_PROJECT_FIELDS:
      return {...state, newProject:{...state.newProject, error: null, loading: null}}

    default:
      return state;
  }
}
