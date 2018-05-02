import { createSelector } from 'reselect';

const selectRoute = (state) => state.get('route');
const selectGlobal = (state) => state.get('global');

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
);

const makeSelectUser = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('user')
);

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

const makeSelectIsAuthenticated = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('isAuthenticated')
);

export {
  makeSelectLocation,
  makeSelectUser,
  makeSelectLoading,
  makeSelectIsAuthenticated,
  selectGlobal,
};
