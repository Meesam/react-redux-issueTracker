import React ,{ Component } from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import  $ from 'jquery';
import 'bootstrap-loader';
import configureStore from './store/configureStore.jsx';
import { syncHistoryWithStore, routerReducer} from 'react-router-redux';
import App from './components/App.jsx';
import Home from './components/home.jsx';
import ProjectIndex from './pages/projectIndex.jsx';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component = {Home} />
        <Route path="/home" component={Home} />
        <Route path="/project" component={ProjectIndex} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('body'));
