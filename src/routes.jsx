import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import createHistory from 'history/lib/createBrowserHistory';
import { Provider } from 'react-redux';
import App from './app/App';

const routes = [
  { path: '/',
    indexRoute: { component: App },
    childRoutes: [
      { path: '*', component: App }
    ]
  }
];

render(
  <Router history={createHistory()} routes={routes} />,
  document.getElementById("app")
);
