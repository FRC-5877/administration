import { call, put, select, take, fork } from 'redux-saga/effects';
import { requestGet, requestPost, requestEdit } from 'utils/request';
import { makeSelectUserId } from 'containers/HomePage/selectors';
import { gotAllContacts, gotAllGroups, addedContact, addedGroup, editedContact } from './actions';
import { GET_ALL_CONTACTS, GET_ALL_GROUPS, ADD_CONTACT, ADD_GROUP, EDIT_CONTACT } from './constants';

export function* getAllGroups() {
  const userId = yield select(makeSelectUserId());
  const groupsUrl = `/api/groups/get?uid=${userId}`;
  try {
    const groups = yield call(requestGet, groupsUrl);
    yield put(gotAllGroups(groups));
  } catch (err) {
    console.error(err);
  }
}

export function* getAllContacts() {
  console.log('GETTING ALL CONTACTS');
  const userId = yield select(makeSelectUserId());
  const contactsUrl = `/api/contacts/get?uid=${userId}`;
  try {
    const contacts = yield call(requestGet, contactsUrl);
    yield put(gotAllContacts(contacts));
  } catch (err) {
    console.error(err);
  }
}

export function* addContact(c) {
  const userId = yield select(makeSelectUserId());
  const addContactUrl = '/api/contacts/add';
  try {
    yield call(requestPost, addContactUrl, { contact: c, uid: userId });
    yield put(addedContact(c));
  } catch (err) {
    console.error(JSON.stringify(err));
  }
}

export function* addGroup(g) {
  const userId = yield select(makeSelectUserId());
  const addGroupUrl = '/api/groups/add';
  try {
    yield call(requestPost, addGroupUrl, { group: g, uid: userId });
    yield put(addedGroup(g));
  } catch (err) {
    console.error(JSON.stringify(err));
  }
}

export function* watchAddContact() {
  while (true) {
    const { contact } = yield take(ADD_CONTACT);
    yield call(addContact, contact);
  }
}

export function* editContact(c) {
  const userId = yield select(makeSelectUserId());
  const editContactUrl = '/api/contacts/edit';
  try {
    yield call(requestEdit, editContactUrl, { contact: c, uid: userId });
    yield put(editedContact(c));
  } catch (err) {
    console.error(JSON.stringify(err));
  }
}

export function* watchAddGroup() {
  while (true) {
    const { group } = yield take(ADD_GROUP);
    yield call(addGroup, group);
  }
}

export function* watchEditContact() {
  while (true) {
    const { contact } = yield take(EDIT_CONTACT);
    yield call(editContact, contact);
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  yield getAllContacts(GET_ALL_CONTACTS, getAllContacts);
  yield getAllGroups(GET_ALL_GROUPS, getAllGroups);
  yield fork(watchAddContact);
  yield fork(watchAddGroup);
  yield fork(watchEditContact);
}
