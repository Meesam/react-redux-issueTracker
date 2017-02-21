import {FETCH_PROJECTTYPE,FETCH_PROJECTTYPE_SUCCESS,FETCH_PROJECTTYPE_FAILURE} from '.././actions/project.jsx';

const INITIAL_STATE={
  projectTypeList:{projectTypes:[],error:null,loading:false},
}

export default function (state=INITIAL_STATE, action) {
  let error;
  switch (action.type){
    case FETCH_PROJECTTYPE:
      return {...state,projectTypeList:{projectTypes:[],error:null,loading:true}};

    case FETCH_PROJECTTYPE_SUCCESS:
      return {...state,projectTypeList:{projectTypes:action.payload,error:null,loading:false}};

    case FETCH_PROJECTTYPE_FAILURE:
      error = action.payload || {message: action.payload.message};
      return{...state,projectTypeList:{projectTypes:[],error:error,loading:false}};

    default:
      return state;

  }
}
