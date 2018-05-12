/*
 *
 * Contacts reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION, GOT_ALL_CONTACTS, ADDED_CONTACT, GOT_ALL_GROUPS, ADDED_GROUP,
} from './constants';

const initialState = fromJS({
  contacts: [],
  groups: [],
});

function contactsReducer(state = initialState, action) {
  switch (action.type) {
    case GOT_ALL_CONTACTS:
      return state.set('contacts', action.contacts);
    case GOT_ALL_GROUPS:
      return state.set('groups', action.groups);
    case ADDED_CONTACT:
      return state;
    case ADDED_GROUP:
      return state;
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default contactsReducer;
