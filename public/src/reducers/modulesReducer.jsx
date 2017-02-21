import {FETCH_MODULES,FETCH_MODULES_SUCCESS,FETCH_MODULES_FAILURE} from '.././actions/modules.jsx';

const INITIAL_STATE={
  moduleList:{modules:[],error:null,loading:false}
}

export default function (state=INITIAL_STATE,action) {
  let error;
  
  switch(action.type){
    
    case FETCH_MODULES:
      return{...state,moduleList:{modules:[],error:null,loading:true}}
    
    case FETCH_MODULES_SUCCESS:
      return{...state,moduleList:{modules:action.payload,error:null,loading:false}}
    
    case FETCH_MODULES_FAILURE:
      error = action.payload || {message: action.payload.message};
      return{...state,moduleList:{modules:[],error:error,loading:false}}
    
    default :
      return state;
  }
}