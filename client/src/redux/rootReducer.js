import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {
  reducer as toastrReducer
} from 'react-redux-toastr';

// import common from './common/reducers';
// import catalog from './catalog/reducers';
import home from '../features/home/reducers';
import user from '../features/user/reducers';

const rootReducer = combineReducers({
  // common,
  home,
  user,
  toastr: toastrReducer,
  router: routerReducer
});

export default rootReducer;
