import { createSelector } from 'reselect';

/**
 * Direct selector to the mailPage state domain
 */
const selectMailPageDomain = (state) => state.get('mailPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by MailPage
 */

const makeSelectMailPage = () => createSelector(
  selectMailPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectMailPage;
export {
  selectMailPageDomain,
};
