/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const DEFAULT_LOCALE = 'en';
export const LOGIN_SUCCESS = 'administration/App/LOGIN_SUCCESS';
export const LOGIN_REQUEST = 'administration/App/LOGIN_REQUEST';
export const LOGIN_ERROR = 'administration/app/LOGIN_ERROR';
export const LOGOUT = 'administration/App/LOGOUT';
export const REDIRECT = 'administration/App/REDIRECT';
