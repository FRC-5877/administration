import { createSelector } from 'reselect';

/**
 * Direct selector to the mail state domain
 */
const selectMailDomain = (state) => state.get('mail');

/**
 * Other specific selectors
 */


/**
 * Default selector used by mail
 */

const makeSelectMail = () => createSelector(
  selectMailDomain,
  (substate) => substate.toJS()
);

export default makeSelectMail;
export {
  selectMailDomain,
};
