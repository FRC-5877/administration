/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_VALIDATE,
  LOGOUT,
} from './constants';

const initialState = fromJS({
  isAuthenticated: false,
  user: null,
  accessToken: null,
});

function homePageReducer(state = initialState, action) {
  let user;
  switch (action.type) {
    case LOGIN_REQUEST:
      return state;
    case LOGIN_SUCCESS:
      return state.set('user', action.user.profileObj).set('accessToken', action.user.accessToken).set('isAuthenticated', true);
    case LOGIN_FAIL:
      return state;
    case LOGIN_VALIDATE:
      user = Object.assign(state.get('user'), action.validation);
      return state.set('user', user);
    case LOGOUT:
      return state.set('user', null).set('isAuthenticated', false).set('accessToken', null);
    default:
      return state;
  }
}

export default homePageReducer;
