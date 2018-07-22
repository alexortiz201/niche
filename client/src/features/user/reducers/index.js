import { combineReducers } from 'redux';

// import your Home Module reducers here and combine them
// Placed in same directory
import userInfo from './applyUser';
import userRepos from './applyUserRepos';

const user = combineReducers({
	userInfo,
	userRepos,
});

export default user;
