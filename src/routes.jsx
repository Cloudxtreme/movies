import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import createHistory from 'history/lib/createBrowserHistory';
import { Provider } from 'react-redux';
import configureStore from './app/configureStore';
import App from './app/App';

const store = configureStore();

const routes = [
  { path: '/',
    indexRoute: { component: App },
    childRoutes: [
      { path: '*', component: App }
    ]
  }
];

render(
  <Provider store={store}>
    <Router history={createHistory()} routes={routes} />
  </Provider>,
  document.getElementById("app")
);
