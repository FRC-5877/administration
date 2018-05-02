/*
 *
 * App actions
 *
 */
import { LOGIN_SUCCESS, LOGIN_REQUEST, LOGOUT } from './constants';

/**
 * Dispatched when the user successfully logs in
 *
 * @param {object} userProfile
 *
 * @return {object} An object with a type of LOGIN_SUCCESS passing the User Profile
 */
export function loginSuccess(userProfile) {
  return {
    type: LOGIN_SUCCESS,
    userProfile,
  };
}

export function loginRequest() {
  return {
    type: LOGIN_REQUEST,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}
