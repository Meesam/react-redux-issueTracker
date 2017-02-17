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

    default:
      return state;
  }
}
