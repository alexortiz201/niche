import {
	REQUEST_USER_START,
	REQUEST_USER_SUCCESS,
  REQUEST_USER_FAILED
} from './actionTypes';

// start request
export function doUser(payload) {
  return {
    type: REQUEST_USER_START,
    payload
  };
}

// on successful
export function doUserFulfilled(payload) {
  return {
    type: REQUEST_USER_SUCCESS,
    payload
  };
}

// on fail
export function doUserFailed(payload) {
  return {
    type: REQUEST_USER_FAILED,
    payload
  };
}
