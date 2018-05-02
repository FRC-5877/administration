import { fromJS } from 'immutable';

import { LOGIN_SUCCESS, LOGIN_REQUEST, LOGOUT } from './constants';

const initialState = fromJS({
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
    case LOGOUT:
      return state.set('user', {}).set('isAuthenticated', false);
    default:
      return state;
  }
}

export default appReducer;
