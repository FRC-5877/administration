/*
 *
 * mail actions
 *
 */

import {
  DEFAULT_ACTION, SEND_MAIL,
} from './constants';

export function sendMail(email) {
  return {
    type: SEND_MAIL,
    email,
  };
}

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
