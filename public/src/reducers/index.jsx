import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import UserReducer from './loginReducer.jsx';
import   ProjectReducer from './projectReducer.jsx'
import ModulesReducer from './modulesReducer.jsx'

const rootReducer = combineReducers({
  user : UserReducer,
  projects: ProjectReducer,
  modules:ModulesReducer,
  routing: routerReducer
});

export default rootReducer;