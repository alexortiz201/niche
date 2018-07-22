import { combineEpics } from 'redux-observable';

// Import feature wise epic
// import common from './common/epics';
import home from '../features/home/epics';
import user from '../features/user/epics';

const rootEpic = combineEpics(
  // common,
  home,
  user,
);

export default rootEpic;
