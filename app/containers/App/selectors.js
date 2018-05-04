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

const makeSelectHistory = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('history')
);

const makeSelectIsAuthenticated = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('isAuthenticated')
);

const makeSelectRedirect = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('redirect')
);

const makeSelectDirection = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('direction')
);

export {
  makeSelectLocation,
  makeSelectHistory,
  makeSelectUser,
  makeSelectLoading,
  makeSelectIsAuthenticated,
  makeSelectRedirect,
  makeSelectDirection,
  selectGlobal,
};
