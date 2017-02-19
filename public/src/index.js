import React ,{ Component } from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import routes from './routes.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
import theme from './material_ui_raw_theme_file.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NotFoundPage from './staticComponents/NotFoundPage.jsx';
import configureStore from './store/configureStore.jsx';
import { syncHistoryWithStore, routerReducer} from 'react-router-redux';
import App from './components/App.jsx';
import Home from './components/home.jsx';
import ProjectIndex from './pages/projectIndex.jsx';
import SignIn from './components/SignInForm.jsx';

//for React Developer Tools
window.React = React;

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store)

injectTapEventPlugin();

render(
  <MuiThemeProvider muiTheme={theme}>
    <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component = {Home} />
        <Route path="/home" component={Home} />
        <Route path="/project" component={ProjectIndex} />
        <Route path="/signin" component={SignIn} />
        <Route path="*" component={NotFoundPage}/>
      </Route>  
    </Router>
  </Provider>
  </MuiThemeProvider>
  , document.getElementById('body'));
