import { fromJS } from 'immutable';

import { LOGIN_SUCCESS, LOGIN_REQUEST, LOGOUT, LOGIN_ERROR } from './constants';

const initialState = fromJS({
  redirect: false,
  direction: null,
  isAuthenticated: false,
  loading: false,
  user: {},
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return state.set('loading', true);
    case LOGIN_SUCCESS:
      return state.set('user', action.userProfile).set('loading', false).set('isAuthenticated', true);
    case LOGIN_ERROR:
      return state.set('loading', false);
    case LOGOUT:
      return state.set('user', {}).set('isAuthenticated', false);
    default:
      return state;
  }
}

export default appReducer;
