/*
 *
 * Contacts actions
 *
 */

import {
  DEFAULT_ACTION, GET_ALL_CONTACTS, GOT_ALL_CONTACTS, GET_ALL_GROUPS, GOT_ALL_GROUPS, ADD_CONTACT, ADDED_CONTACT, ADD_GROUP, ADDED_GROUP,
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

export function addContact() {
  return {
    type: ADD_CONTACT,
  };
}

export function addedContact(contact) {
  return {
    type: ADDED_CONTACT,
    contact,
  };
}

export function addGroup() {
  return {
    type: ADD_GROUP,
  };
}

export function addedGroup(group) {
  return {
    type: ADDED_GROUP,
    group,
  };
}

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
