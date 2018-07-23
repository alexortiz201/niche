import { combineEpics } from 'redux-observable';

// import your Home Module epics here and combine them
// Place all epics in same directory
import info from './fetchUser';
import repos from './fetchUserRepos';

const user = combineEpics(
	info,
  repos,
);

export default user;
