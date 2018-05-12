import { createSelector } from 'reselect';

/**
 * Direct selector to the homePage state domain
 */
const selectHomePageDomain = (state) => state.get('homePage');

const makeSelectUser = () => createSelector(
  selectHomePageDomain,
  (substate) => substate.get('user')
);

const makeSelectIsAuthenticated = () => createSelector(
  selectHomePageDomain,
  (substate) => substate.get('isAuthenticated')
);

const makeSelectHomePage = () => createSelector(
  selectHomePageDomain,
  (substate) => substate.toJS()
);

const makeSelectUserId = () => createSelector(
  selectHomePageDomain,
  (substate) => substate.get('user').googleId
);

export {
  selectHomePageDomain,
  makeSelectHomePage,
  makeSelectIsAuthenticated,
  makeSelectUser,
  makeSelectUserId,
};
