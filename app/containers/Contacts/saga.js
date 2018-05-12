import { call, put, select } from 'redux-saga/effects';
import request from 'utils/request';
import { makeSelectUserId } from 'containers/HomePage/selectors';
import { gotAllContacts, gotAllGroups } from './actions';
import { GET_ALL_CONTACTS, GET_ALL_GROUPS } from './constants';

export function* getAllGroups() {
  const userId = yield select(makeSelectUserId());
  const groupsUrl = `/api/groups/get?uid=${userId}`;
  try {
    const groups = yield call(request, groupsUrl);
    yield put(gotAllGroups(groups));
  } catch (err) {
    console.error(err);
  }
}

export function* getAllContacts() {
  const userId = yield select(makeSelectUserId());
  const contactsUrl = `/api/contacts/get?uid=${userId}`;
  try {
    const contacts = yield call(request, contactsUrl);
    yield put(gotAllContacts(contacts));
  } catch (err) {
    console.error(err);
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  yield getAllContacts(GET_ALL_CONTACTS, getAllContacts);
  yield getAllGroups(GET_ALL_GROUPS, getAllGroups);
}
