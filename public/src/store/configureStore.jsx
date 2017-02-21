import rootReducer from '.././reducers/index.jsx';
import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';


export default function configureStore(initialState) {
  const finalCreateStore = compose(
    applyMiddleware(promise),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore);

  const store = finalCreateStore(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('.././reducers/index.jsx', () => {
      const nextReducer = require('.././reducers/index.jsx');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}