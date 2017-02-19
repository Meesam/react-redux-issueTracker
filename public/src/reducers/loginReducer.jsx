import { ON_LOGIN, ON_LOGIN_SUCCESS , ON_LOGIN_FAILURE , RESET_LOGIN } from '../actions/login.jsx';

const INITIAL_STATE = {user: null, status:null, error:null, loading: false};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {
   
    case ON_LOGIN:
    return { ...state, user: null, status:'signin', error:null, loading: true};

    case ON_LOGIN_SUCCESS:
    return { ...state, user: action.payload.user, status:'authenticated', error:null, loading: false}; //<-- authenticated

    case ON_LOGIN_FAILURE:
    error = action.payload.data || {message: action.payload.message};      
    return { ...state, user: null, status:'signin', error:error, loading: false};

    case RESET_LOGIN:
    return { ...state, user: null, status:null, error:null, loading: false};
    
    default:
    return state;
  }
}
