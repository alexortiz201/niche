import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import createHistory from 'history/createHashHistory';
import { routerMiddleware } from 'react-router-redux';

// import root epic/reducer
import rootEpic from './rootEpic';
import rootReducer from './rootReducer';
import queryString from 'query-string';

// export `history` to use in index.js, we using `createBrowserHistory`
export const history = createHistory();

const epicMiddleware = createEpicMiddleware();

// Build the middleware for intercepting and dispatching navigation actions
const appRouterMiddleware = routerMiddleware(history);

const store = createStore(
    rootReducer,
    composeWithDevTools(
	    applyMiddleware(epicMiddleware),
	    applyMiddleware(appRouterMiddleware)
    )
);

epicMiddleware.run(rootEpic, {
  dependencies: {
    queryString
  }
});

export default store;
