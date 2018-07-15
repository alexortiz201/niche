import React from 'react';
import { render } from 'react-dom';

// global css
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Import store and history
import store, { history } from './redux/store';

import { RoutesWrapperFactory } from './routes/index.js';
import routes from './routes/routes';

import registerServiceWorker from './registerServiceWorker';

/**
 * https://stackoverflow.com/questions/34130539/uncaught-error-invariant-violation-element-type-is-invalid-expected-a-string
 * This throws if you use v4 of 'react-router-redux'
 */
render(
  <RoutesWrapperFactory
    store={store}
    history={history}
    routes={routes} />,
  document.getElementById('root')
);

registerServiceWorker();
