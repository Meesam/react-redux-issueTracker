import React from 'react';
import { Router,Route, IndexRoute, browserHistory } from 'react-router';
import NotFoundPage from './staticComponents/NotFoundPage.jsx';
import configureStore from './store/configureStore.jsx';
import { syncHistoryWithStore, routerReducer} from 'react-router-redux';
import App from './components/App.jsx';
import Home from './components/home.jsx';
import ProjectIndex from './pages/projectIndex.jsx';
import { Provider } from 'react-redux';

//for React Developer Tools
window.React = React;

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store)

export default (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component = {Home} />
        <Route path="/home" component={Home} />
        <Route path="/project" component={ProjectIndex} />
        <Route path="*" component={NotFoundPage}/>
      </Route>  
    </Router>
  </Provider>
);