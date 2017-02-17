import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import   ProjectReducer from './projectReducer.jsx'

const rootReducer = combineReducers({
  projects: ProjectReducer,
  routing: routerReducer
});

export default rootReducer;