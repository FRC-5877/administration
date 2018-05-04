import { fromJS } from 'immutable';

import { LOGIN_SUCCESS, LOGIN_REQUEST, LOGOUT, REDIRECT } from './constants';

const initialState = fromJS({
  redirect: false,
  direction: null,
  isAuthenticated: false,
  loading: false,
  user: {},
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case REDIRECT:
      return state.set('redirect', action.redirect).set('direction', action.direction);
    case LOGIN_REQUEST:
      return state.set('loading', true);
    case LOGIN_SUCCESS:
      return state.set('user', action.userProfile).set('loading', false).set('isAuthenticated', true);
    case LOGOUT:
      return state.set('user', {}).set('isAuthenticated', false);
    default:
      return state;
  }
}

export default appReducer;
