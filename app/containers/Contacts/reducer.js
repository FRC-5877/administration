/*
 *
 * Contacts reducer
 *
 */
/* eslint no-underscore-dangle: 0 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION, GOT_ALL_CONTACTS, ADDED_CONTACT, GOT_ALL_GROUPS, ADDED_GROUP, EDITED_CONTACT,
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
      return state.set('contacts', state.get('contacts').concat(action.contact));
    case ADDED_GROUP:
      return state.set('groups', state.get('groups').concat(action.group));
    case EDITED_CONTACT: {
      const index = state.get('contacts').findIndex((contact) => contact._id === action.contact._id);
      const newContacts = [
        ...state.get('contacts').slice(0, index),
        action.contact,
        ...state.get('contacts').slice(index + 1),
      ];
      return state.set('contacts', newContacts);
    }
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default contactsReducer;
