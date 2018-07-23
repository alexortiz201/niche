import { combineReducers } from 'redux';

// import your Home Module reducers here and combine them
// Placed in same directory
import info from './applyUser';
import repos from './applyUserRepos';

const user = combineReducers({
	info,
	repos,
});

export default user;
