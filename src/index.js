import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../src/reducers/reducer';
import { Router, Route } from 'react-router';

import Test from './test';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
        <Route path="/" component={App} />
        <Route path="/test" component={Test} />
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
