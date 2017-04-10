import { ON_LOGIN, ON_LOGIN_SUCCESS , ON_LOGIN_FAILURE , RESET_LOGIN , USER_FROM_TOKEN, USER_FROM_TOKEN_SUCCESS,
  USER_FROM_TOKEN_FAILURE , RESET_TOKEN , LOGOUT_USER,INVALID_LOGIN} from '../actions/login.jsx';

const INITIAL_STATE = {user: null, status:null, error:null, loading: false};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {
   
    case ON_LOGIN:
    return { ...state, user: null, status:'signin', error:null, loading: true};

    case ON_LOGIN_SUCCESS:
    return { ...state, user: action.payload, status:'authenticated', error:null, loading: false};

    case ON_LOGIN_FAILURE:
    error = action.payload.data || {message: action.payload.message};      
    return { ...state, user: null, status:'signin', error:error, loading: false};

    case RESET_LOGIN:
    return { ...state, user: null, status:null, error:null, loading: false};

    case INVALID_LOGIN:
      return { ...state, user: null, status:'invalidLogin', error:action.payload, loading: false};

    case USER_FROM_TOKEN:
      return { ...state, user: null, status:'storage', error:null, loading: true};

    case USER_FROM_TOKEN_SUCCESS:
      return { ...state, user: action.payload.data.objdata, status:'authenticated', error:null, loading: false};

    case USER_FROM_TOKEN_FAILURE:
      error = action.payload.data || {message: action.payload.message};
      return { ...state, user: null, status:'logout', error:error, loading: false};

    case RESET_TOKEN:
      return { ...state, user: null, status:'authenticated', error:null, loading: false};

    case LOGOUT_USER:
      return {...state, user:null, status:'logout', error:null, loading: false};
    
    default:
    return state;
  }
}
