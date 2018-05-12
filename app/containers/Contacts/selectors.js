import { createSelector } from 'reselect';

/**
 * Direct selector to the contacts state domain
 */
const selectContactsDomain = (state) => state.get('contacts');

const makeSelectContactList = () => createSelector(
  selectContactsDomain,
  (substate) => substate.get('contacts')
);

const makeSelectGroupList = () => createSelector(
  selectContactsDomain,
  (substate) => substate.get('groups')
);

const makeSelectContacts = () => createSelector(
  selectContactsDomain,
  (substate) => substate.toJS()
);

export {
  makeSelectContacts,
  makeSelectContactList,
  makeSelectGroupList,
  selectContactsDomain,
};
