import { call, put, select } from 'redux-saga/effects';
import { makeSelectUser } from 'containers/HomePage/selectors';
import { loginValidate } from 'containers/HomePage/actions';
import request from 'utils/request';
import { LOGIN_SUCCESS } from './constants';

export function* validateUser() {
  const user = yield select(makeSelectUser());
  const validateUrl = `/api/user/validate?gid=${user.googleId}`;

  try {
    const validation = yield call(request, validateUrl);
    yield put(loginValidate(validation));
  } catch (err) {
    console.log(err);
  }
}

export default function* defaultSaga() {
  //
  yield validateUser(LOGIN_SUCCESS, validateUser);
}

