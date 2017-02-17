import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import   ProjectReducer from './projectReducer.jsx'
import ModulesReducer from './modulesReducer.jsx'

const rootReducer = combineReducers({
  projects: ProjectReducer,
  modules:ModulesReducer,
  routing: routerReducer
});

export default rootReducer;