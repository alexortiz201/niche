import {
  REQUEST_USER_START,
  REQUEST_USER_SUCCESS,
  REQUEST_USER_FAILED,
} from '../actions/actionTypes';

let initialState = {
  user: {},
  isLoading: false,
  errors: []
};
function applyUser(state = initialState, action) {

  switch (action.type) {
    case REQUEST_USER_START:
      return Object.assign({}, state, {
        isLoading: true
      });

    case REQUEST_USER_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        user: action.payload
      });

    case REQUEST_USER_FAILED:
      return Object.assign({}, state, {
        isLoading: false,
        errors: action.payload
      });

    default:
      return state;
  }
}

export default applyUser;
