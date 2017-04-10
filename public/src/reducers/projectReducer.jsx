import { FETCH_PROJECT,FETCH_PROJECT_SUCCESS,FETCH_PROJECT_FAILURE,RESETS_PROJECT,FETCH_PROJECT_BY_ID,FETCH_PROJECT_BY_ID_SUCCESS,FETCH_PROJECT_BY_ID_FAILURE,
  ADD_PROJECT,ADD_PROJECT_SUCCESS,ADD_PROJECT_FAILURE,FETCH_PROJECTTYPE,FETCH_PROJECTTYPE_SUCCESS,FETCH_PROJECTTYPE_FAILURE,
  SEARCH_PROJECT,SEARCH_PROJECT_SUCCESS,SEARCH_PROJECT_FAILURE,ASYNC_VALIDATE,ASYNC_VALIDATE_SUCCESS,ASYNC_VALIDATE_FAILURE } from '.././actions/project.jsx'

const INITIAL_STATE={
  projectList:{projects:[],curPage:1,error:null,loading:false},
  project:{projectData:{},error:null,loading:false},
  newProject:{success:null,error:null,loading:false},
  projectTypeList:{projectTypes:[],error:null,loading:false},
  aysncValidate:{isExist:null,error:null,loading:false}
}

export default function (state=INITIAL_STATE,action) {
  let error;
  switch(action.type){

    case FETCH_PROJECT:
      return{...state,projectList:{projects:[],curPage:1,error:null,loading:true}};

    case FETCH_PROJECT_SUCCESS:
      return{...state,projectList:{projects:action.payload.projects,curPage:action.payload.curPage,error:null,loading:false}};

    case FETCH_PROJECT_FAILURE:
      error = action.payload || {message: action.payload.message};
      return{...state,projectList:{projects:[],curPage:1,error:error,loading:false}};

    case SEARCH_PROJECT:
      return{...state,projectList:{projects:[],error:null,loading:true}};

    case SEARCH_PROJECT_SUCCESS:
      return{...state,projectList:{projects:action.payload,error:null,loading:false}};

    case SEARCH_PROJECT_FAILURE:
      error = action.payload || {message: action.payload.message};
      return{...state,projectList:{projects:[],error:error,loading:false}};

    case RESETS_PROJECT:
      return {...state,projects:[],error:null,loading:false};

    case FETCH_PROJECT_BY_ID:
      return {...state , project:{projectData:null,error:null,loading:true}};

    case FETCH_PROJECT_BY_ID_SUCCESS:
      return {...state , project:{projectData:action.payload,error:null,loading:false}};

    case FETCH_PROJECT_BY_ID_FAILURE:
      error = action.payload || {message: action.payload.message};
      return {...state , project:{projectData:null,error:error,loading:false}};

    case ADD_PROJECT:
      return {...state , newProject:{success:null,error:null,loading:true}};

    case  ADD_PROJECT_SUCCESS:
      return {...state , newProject:{success:action.payload,error:null,loading:false}};

    case ADD_PROJECT_FAILURE:
      error = action.payload || {message: action.payload.message};
      return {...state , newProject:{success:null,error:error,loading:false}};

    case FETCH_PROJECTTYPE:
      return {...state,projectTypeList:{projectTypes:[],error:null,loading:true}};

    case FETCH_PROJECTTYPE_SUCCESS:
      return {...state,projectTypeList:{projectTypes:action.payload,error:null,loading:false}};

    case FETCH_PROJECTTYPE_FAILURE:
      error = action.payload || {message: action.payload.message};
      return {...state,projectTypeList:{projectTypes:[],error:error,loading:false}};

    case ASYNC_VALIDATE:
      return {...state,aysncValidate:{isExist:null,error:null,loading:true}};

    case ASYNC_VALIDATE_SUCCESS:
      return {...state,aysncValidate:{isExist:action.payload,error:null,loading:false}}

    case ASYNC_VALIDATE_FAILURE:
      error = action.payload || {message: action.payload.message};
      return {...state , aysncValidate:{isExist:null,error:error,loading:false}};

    default:
      return state;
  }
}
