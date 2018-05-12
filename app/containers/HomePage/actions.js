/*
 *
 * HomePage actions
 *
 */

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_VALIDATE,
  LOGOUT,
} from './constants';

export function loginRequest() {
  return {
    type: LOGIN_REQUEST,
  };
}

export function loginFailure(error) {
  return {
    type: LOGIN_FAIL,
    error,
  };
}

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}

export function loginValidate(validation) {
  return {
    type: LOGIN_VALIDATE,
    validation,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}
