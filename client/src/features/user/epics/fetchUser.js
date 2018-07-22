/**
 * To fix missing deps for observable required an install of
 * 'rxjs-compat'.
 */
import { ajax } from 'rxjs/observable/dom/ajax';
import { ofType } from 'redux-observable';
import { catchError, mergeMap, map } from 'rxjs/operators';

import { REQUEST_USER_START } from '../actions/actionTypes';

import {
	doUserFulfilled,
	doUserFailed
} from '../actions/doUser';

// Also now using v6 pipe operators
const fetchUser = (action$, state$) =>
	action$.pipe(
		ofType(REQUEST_USER_START),
		mergeMap(action => {
			let apiUrl = `https://api.github.com/users/${action.payload}`;
			return ajax
				.getJSON(apiUrl)
				.pipe(
					map(response => doUserFulfilled(response)),
					catchError(error => doUserFailed(error.xhr.response))
				);
		})
	);

export default fetchUser;
