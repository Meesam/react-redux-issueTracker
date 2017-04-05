import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import UserReducer from './loginReducer.jsx';
import ProjectReducer from './projectReducer.jsx';
import ModulesReducer from './modulesReducer.jsx';
import ProjectTypeReducer from './projectTypeReducer.jsx';
import IssueReducer from './issueReducer.jsx';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  user : UserReducer,
  projects: ProjectReducer,
  modules:ModulesReducer,
  projectTypes:ProjectTypeReducer,
  issues:IssueReducer,
  form: formReducer,
  routing: routerReducer
});

export default rootReducer;