import { combineEpics } from 'redux-observable';

// import your Home Module epics here and combine them
// Place all epics in same directory
import userInfo from './fetchUser';
import userRepos from './fetchUserRepos';

const user = combineEpics(
	userInfo,
  userRepos,
);

export default user;
