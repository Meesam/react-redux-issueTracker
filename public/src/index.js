import React ,{ Component } from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import  $ from 'jquery';
import 'bootstrap-loader';
import NotFoundPage from './staticComponents/NotFoundPage.jsx';
import configureStore from './store/configureStore.jsx';
import { syncHistoryWithStore, routerReducer} from 'react-router-redux';
import App from './pages/appIndex.jsx';
import Home from './components/home.jsx';
import ProjectIndex from './pages/projectIndex.jsx';
import SignIn from './pages/loginContainer.jsx';
import AddProjectIndex from  './pages/addProjectIndex.jsx'
import '!style-loader!css-loader!sass-loader!font-awesome/css/font-awesome.css';
import '../styles/css/AdminLTE.css';
import '../styles/css/skins/skin-blue.min.css';
import Authenticated from './containers/authenticationContainer.jsx';
import AppModuleIndex from  './pages/appModulesIndex.jsx';

//for React Developer Tools
window.React = React;

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="home" component={Home} />
        <Route path="login" component={SignIn} />
        <Route path="project" component={Authenticated(ProjectIndex)} />
        <Route path="newproject" component={Authenticated(AddProjectIndex)} />
        <Route path="modules" component={Authenticated(AppModuleIndex)} />
        <Route path="*" component={NotFoundPage}/>
      </Route>  
    </Router>
  </Provider>
  , document.getElementById('body'));
