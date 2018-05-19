/*
 *
 * Contacts actions
 *
 */

import {
  DEFAULT_ACTION, GET_ALL_CONTACTS, GOT_ALL_CONTACTS, GET_ALL_GROUPS, GOT_ALL_GROUPS, ADD_CONTACT, ADDED_CONTACT, ADD_GROUP, ADDED_GROUP, EDIT_CONTACT, EDITED_CONTACT,
} from './constants';

export function getAllContacts() {
  return {
    type: GET_ALL_CONTACTS,
  };
}

export function gotAllContacts(contacts) {
  return {
    type: GOT_ALL_CONTACTS,
    contacts,
  };
}

export function getAllGroups() {
  return {
    type: GET_ALL_GROUPS,
  };
}

export function gotAllGroups(groups) {
  return {
    type: GOT_ALL_GROUPS,
    groups,
  };
}

export function addContact(contact) {
  return {
    type: ADD_CONTACT,
    contact,
  };
}

export function addedContact(contact) {
  return {
    type: ADDED_CONTACT,
    contact,
  };
}

export function addGroup(group) {
  return {
    type: ADD_GROUP,
    group,
  };
}

export function addedGroup(group) {
  return {
    type: ADDED_GROUP,
    group,
  };
}

export function editContact(contact) {
  return {
    type: EDIT_CONTACT,
    contact,
  };
}

export function editedContact(contact) {
  return {
    type: EDITED_CONTACT,
    contact,
  };
}

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
